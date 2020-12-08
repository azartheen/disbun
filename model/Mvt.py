from enum import Enum
from fastapi import Path, Response
from db import db


class MvtType(str, Enum):
    tanaman = "tanaman"
    tani = "tani"


class Mvt:
    async def get_mvt(
        mvt_type: MvtType,
        layer_name: str,
        z: int = Path(..., ge=10),
        x: int = Path(..., ge=10),
        y: int = Path(..., ge=10),
    ):
        filter_query = "tanaman = 'akar_wangi' AND " if mvt_type == "tanaman" else ""
        table_name = "disbun_tanaman" if mvt_type == "tanaman" else "disbun_tani"
        columns = (
            "ogc_fid, id_desa, tanaman, hasil, " if mvt_type == "tanaman" else "id, "
        )

        pool = db.get_pool()
        mvt = await pool.fetchval(
            f"""
            SELECT
                ST_AsMVT(mvtgeom_table, '{layer_name}', 4096, 'geom', NULL)
            FROM (
                SELECT
                        {columns} ST_AsMVTGeom(
                            ST_Transform(geom, 3857),
                            ST_TileEnvelope($1,$2,$3)
                        ) geom
                FROM ( 
                    SELECT {columns} geom, srid
                    FROM {table_name},
                        (
                            SELECT
                                Find_SRID('public', '{table_name}', 'geom') AS srid
                        ) srid_table
                    WHERE
                        {filter_query}
                        ST_Transform(
                            ST_TileEnvelope($1,$2,$3), srid
                        ) && geom
                ) intersection_table
            ) mvtgeom_table
            """,
            z,
            x,
            y,
        )
        return mvt
        # if mvt == bytes():
        #     return Response(status_code=204)
        # return Response(content=mvt, media_type="application/x-protobuf")

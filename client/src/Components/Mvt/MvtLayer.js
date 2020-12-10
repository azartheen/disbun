import React from "react";
import MapContext from "../../Context/MapContext";
import AppContext from "../../Context/AppContext";
// import MapPopup from "../Components/MapPopup";

const MvtLayer = ({
  layername = "3211062009",
  layout,
  paint,
  filter,
  type = "tanaman",
  idDesa = "3211062009",
}) => {
  const { map } = React.useContext(MapContext);
  const { mainUrl } = React.useContext(AppContext);
  React.useEffect(() => {
    if (!map.getSource(layername)) {
      map.addSource(layername, {
        type: "vector",
        tiles: [
          `https://disbun.braga.co.id/api/mvt/${layername}/{z}/{x}/{y}?mvt_type=${type}&id_desa=${idDesa}`,
        ],
        minzoom: 10,
        maxzoom: 20,
      });

      map.addLayer({
        id: layername,
        type: "fill",
        source: layername,
        "source-layer": layername,
        paint: {
          "fill-color": [
            "match",
            ["get", "hasil"],
            "Sesuai",
            "#009D57",
            "Cukup Sesuai",
            "#FFD039",
            "Kurang Sesuai",
            "#E9775E",
            "Tidak Sesuai",
            "#656565",
            "black",
          ],
          "fill-opacity": 0.8,
          "fill-outline-color": "white",
        },
        layout: {},
      });
      map.setFilter(layername, ["in", "tanaman", "kapuk"]);

      map.on("mouseenter", layername, function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", layername, function () {
        map.getCanvas().style.cursor = "";
      });
      //   map.addLayer({
      //     id: layername,
      //     type: "circle",
      //     source: layername,
      //     "source-layer": layername,
      //     minzoom: 11,
      //     paint: {
      //       "circle-color": "#FEB831",
      //       "circle-stroke-color": "white",
      //       "circle-stroke-width": 1,
      //       "circle-opacity": [
      //         "interpolate",
      //         ["linear"],
      //         ["zoom"],
      //         8,
      //         0,
      //         9,
      //         0.5,
      //         10,
      //         1,
      //       ],
      //     },
      //     layout: {},
      //   });
    }

    return () => {
      window.location.pathname === "/maps" && map.removeLayer(layername);
      window.location.pathname === "/maps" && map.removeSource(layername);
    };
  }, [layername, layout, map, paint, filter, mainUrl, type, idDesa]);

  return (
    <React.Fragment>
      {/* <MapPopup layername={layername} handleShowBtn={handleShowBtn}></MapPopup> */}
    </React.Fragment>
  );
};

export default React.memo(MvtLayer);

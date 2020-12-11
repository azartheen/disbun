import React from "react";
import MapContext from "../../Context/MapContext";
import AppContext from "../../Context/AppContext";
// import MapPopup from "../Components/MapPopup";

const MvtLayer = ({ layername = "tanaman", layout, paint, filter }) => {
  const { map } = React.useContext(MapContext);
  const { mainUrl, idDesa, type, dispatch, jenisMap } = React.useContext(
    AppContext
  );
  React.useEffect(() => {
    if (!map.getSource(layername)) {
      if (jenisMap) {
        map.flyTo({
          center: [idDesa.longitude, idDesa.latitude],
          zoom: 12,
        });
      } else {
        map.flyTo({
          center: [idDesa.x, idDesa.y],
          zoom: 12,
        });
      }

      map.addSource(layername, {
        type: "vector",
        tiles: [
          `https://disbun.braga.co.id/api/mvt/${layername}/{z}/{x}/{y}?mvt_type=${type}&id_desa=${idDesa.id_desa}`,
        ],
        minzoom: 10,
        maxzoom: 20,
      });
      debugger;

      if (jenisMap) {
        map.addLayer({
          id: layername,
          type: "circle",
          source: layername,
          "source-layer": layername,
          minzoom: 11,
          paint: {
            "circle-color": "#FEB831",
            "circle-stroke-color": "white",
            "circle-stroke-width": 1,
            "circle-opacity": [
              "interpolate",
              ["linear"],
              ["zoom"],
              8,
              0,
              9,
              0.5,
              10,
              1,
            ],
          },
          layout: {},
        });
        map.on("click", layername, function (e) {
          console.log(e.features[0].properties);
        });
      } else {
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
      }

      map.on("mouseenter", layername, function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseleave", layername, function () {
        map.getCanvas().style.cursor = "";
      });
    }

    return () => {
      window.location.pathname === "/map" && map.removeLayer(layername);
      window.location.pathname === "/map" && map.removeSource(layername);
      window.location.pathname !== "/map" &&
        dispatch({
          type: "setIdDesa",
          payload: { x: 107.606, y: -6.9292, id_desa: "" },
        });
      window.location.pathname !== "/map" &&
        dispatch({
          type: "setKel",
          payload: "",
        });
      window.location.pathname !== "/map" &&
        dispatch({
          type: "setKab",
          payload: "",
        });
      window.location.pathname !== "/map" &&
        dispatch({
          type: "setKec",
          payload: "",
        });
    };
  }, [
    layername,
    layout,
    map,
    paint,
    filter,
    mainUrl,
    type,
    idDesa,
    dispatch,
    jenisMap,
  ]);

  return (
    <React.Fragment>
      {/* <MapPopup layername={layername} handleShowBtn={handleShowBtn}></MapPopup> */}
    </React.Fragment>
  );
};

export default React.memo(MvtLayer);

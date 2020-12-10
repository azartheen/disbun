import React from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl.js";
import { MapProvider } from "../Context/MapContext";
import Search from "../Components/Search";
import FilterKelompokTani from "../Components/FilterKelompokTani";
import lahan from "../Assets/legendaLahan.svg";
import tani from "../Assets/legendaTani.svg";
import FilterPetaLahan from "../Components/FilterPetaLahan";
import AppContext from "../Context/AppContext";
import MvtLayer from "../Components/Mvt/MvtLayer";

export default function Map() {
  const mapElementRef = React.useRef(null);
  const [mapload, setMapLoad] = React.useState(false);
  const mapRef = React.useRef(null);
  const { jenisMap } = React.useContext(AppContext);
  const [isCari, setIsCari] = React.useState(false);
  const [showFilter, setShowFilter] = React.useState(false);

  React.useEffect(() => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiamFiYXJkaWdpdGFsc2VydmljZXMiLCJhIjoiY2p6bTR3dDAyMDZ4ODNpcG5kcGlnbHBudyJ9.PpgYTIVvWVkKG-ttTuMD6g";
    mapRef.current = new mapboxgl.Map({
      container: mapElementRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [107.606, -6.9292],
      zoom: 12,
    });

    // mapRef.current.addControl(
    //   new mapboxgl.GeolocateControl({
    //     positionOptions: {
    //       enableHighAccuracy: true,
    //     },
    //     trackUserLocation: true,
    //   }),
    //   "bottom-right"
    // );
    // mapRef.current.addControl(new mapboxgl.NavigationControl(), "bottom-right");
    mapRef.current.on("load", () => {
      setMapLoad(true);
    });
    return () => {
      mapRef.current.remove();
    };
  }, []);

  const cariTimer = (cari) => {
    function show() {
      setShowFilter(!showFilter);
    }
    function search() {
      setIsCari(cari);
    }
    if (!cari) {
      setTimeout(search, 200);
      setShowFilter(!showFilter);
    } else {
      setIsCari(cari);
      setTimeout(show, 1000);
    }
  };
  return (
    <React.Fragment>
      <div className='relative'>
        <div
          ref={mapElementRef}
          style={{ height: "calc(100vh - 77px)", top: "77px" }}
        ></div>
      </div>

      <MapProvider value={{ map: mapRef.current }}>
        {mapload && (
          <React.Fragment>
            <MvtLayer />
            {jenisMap ? (
              <FilterKelompokTani isCari={showFilter} />
            ) : (
              <FilterPetaLahan isCari={showFilter} />
            )}
            <Search isCari={isCari} setIsCari={cariTimer} />
            {jenisMap ? (
              <div
                style={{
                  bottom: "20px",
                  right: "20px",
                  position: "absolute",
                  zIndex: "2",
                }}
              >
                <img src={tani} alt='legenda'></img>
              </div>
            ) : (
              <div
                style={{
                  bottom: "20px",
                  right: "20px",
                  position: "absolute",
                  zIndex: "2",
                }}
              >
                <img src={lahan} alt='legendaLahan'></img>
              </div>
            )}
          </React.Fragment>
        )}
      </MapProvider>
    </React.Fragment>
  );
}

import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import AppContext from "../Context/AppContext";
import disbun from "../Assets/logoDisbun.svg";
import info from "../Assets/icInfoGray.svg";
import infoAct from "../Assets/icInfoGreen.svg";
import mapIc from "../Assets/icPetaGray.svg";
import mapAct from "../Assets/icPetaGreen.svg";
import tableIc from "../Assets/icTable.svg";
import tableIcAct from "../Assets/tableAct.svg";
import dpDownGray from "../Assets/dpDownGray.svg";
import dpDownGreen from "../Assets/dpDownGreen.svg";
import Login from "../Pages/Login";

export default function MainNavigation() {
  const history = useHistory();
  const { dispatch, jenisMap } = React.useContext(AppContext);
  const [popup, setPopup] = React.useState(false);
  const [pilihMap, setMap] = React.useState(false);
  const [path, setpath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    setMap(false);
  }, [path]);

  return (
    <div>
      <nav
        className='hidden sm:flex md:flex lg:flex bg-white items-center justify-between fixed w-full top-0 shadow-sm w-full z-20'
        style={{ height: "77px" }}
      >
        <div className='flex m-4 lg:text-base text-xs ml-20'>
          <div className='flex'>
            <div className='m-auto'>
              <img src={disbun} alt='disbun' />
            </div>
            <div className='m-auto mx-4'>
              <p className='text-xl font-medium text-gray-700'>Dashboard</p>
              <p style={{ fontSize: "10px" }}>Dinas Perkebunan</p>
            </div>
            <div
              className='h-full bg-gray-300 rounded mx-6'
              style={{ width: "2px" }}
            ></div>
          </div>
          <div className=' hover:bg-white rounded-full mr-5 m-auto text-center'>
            <NavLink
              exact
              to='/'
              activeStyle={{
                color: "green",
              }}
              onClick={() => {
                setpath("/");
              }}
              style={{
                textDecoration: "none",

                color: "#4F4F4F",
                display: "flex",
              }}
            >
              <img
                src={path === "/" ? infoAct : info}
                className='mx-4'
                alt='inf'
              />
              <p className='py-2'>Home</p>
            </NavLink>
          </div>
          <div className='hover:bg-white rounded-full m-auto text-center relative'>
            <button
              onClick={() => {
                setMap(!pilihMap);
              }}
              style={{
                display: "flex",
              }}
            >
              <img
                src={path === "/map" ? mapAct : mapIc}
                className='mx-4 m-auto'
                alt='heat'
              />
              <p
                className='py-2'
                style={{ color: path === "/map" ? "green" : "#4F4F4F" }}
              >
                Peta Sebaran
              </p>
              <img
                src={path === "/map" ? dpDownGreen : dpDownGray}
                className='mx-4 m-auto'
                alt='heat'
              />
            </button>
            {pilihMap ? (
              <div className='absolute bg-white rounded shadow-md p-2 border z-50 text-gray-700'>
                <div
                  onClick={() => {
                    setMap(false);
                  }}
                >
                  <button
                    className={`p-2 text-left w-full ${
                      !jenisMap && path === "/map" ? "text-green-600" : null
                    }`}
                    onClick={() => {
                      history.push("/map");
                      setpath("/map");
                      dispatch({ type: "setType", payload: "tanaman" });
                      dispatch({
                        type: "resetKabKec",
                        payload: {
                          x: 107.606,
                          y: -6.9292,
                          id_desa: "",
                        },
                      });
                      dispatch({ type: "setJenisMap", payload: false });
                    }}
                  >
                    <p>Peta Lahan</p>
                  </button>
                  <button
                    className={`p-2 text-left w-full ${
                      jenisMap && path === "/map" ? "text-green-600" : null
                    }`}
                    onClick={() => {
                      history.push("/map");
                      setpath("/map");
                      dispatch({ type: "setType", payload: "tani" });
                      dispatch({
                        type: "resetKabKec",
                        payload: {
                          longitude: 107.606,
                          latitude: -6.9292,
                          id_desa: "",
                        },
                      });
                      dispatch({ type: "setJenisMap", payload: true });
                    }}
                  >
                    <p>Peta Kelompok Tani</p>
                  </button>
                </div>
              </div>
            ) : null}
          </div>
          <div className='hover:bg-white rounded-full m-auto ml-5 text-center'>
            <NavLink
              exact
              to='/database'
              activeStyle={{
                color: "green",
              }}
              onClick={() => {
                setpath("/database");
              }}
              style={{
                color: "#4F4F4F",
                display: "flex",
              }}
            >
              <img
                src={path === "/database" ? tableIcAct : tableIc}
                className='mx-4'
                alt='heat'
              />
              <p className='py-2'>Database</p>
            </NavLink>
          </div>
        </div>
        <div className='text-gray-700 m-4 flex mr-20'>
          <p className='m-auto text-sm mr-6'>Selamat Datang!</p>
          <button
            onClick={() => {
              setPopup(!popup);
            }}
            className='hover:bg-green-500 m-auto text-xs lg:text-sm bg-green-700 px-8 py-2 rounded-lg text-white'
          >
            <p>Sign In</p>
          </button>
        </div>
      </nav>
      {popup ? (
        <div className='fixed w-screen z-40 top-0' style={{ height: "100vh" }}>
          <Login setPopup={setPopup} />
        </div>
      ) : null}
    </div>
  );
}

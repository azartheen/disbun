import React from "react";
import peta from "../Assets/icPetaBig.svg";
import search from "../Assets/icSearch.svg";
import dpDown from "../Assets/dpDown.svg";
import AppContext from "../Context/AppContext";

export default function Search({ isCari, setIsCari }) {
  const [kab, setKab] = React.useState("kabupaten");
  const { jenisMap } = React.useContext(AppContext);
  const [kec, setKec] = React.useState("dayeuhkolot");
  const [kel, setKel] = React.useState("Cangkuang Wetan");

  return (
    <React.Fragment>
      <div
        className={`absolute text-gray-700 z-10 ${
          isCari ? "w-full p-4 shadow" : "w-10/12 p-4 "
        } flex rounded bg-white transition-all duration-500 ease-linear`}
        style={{
          top: isCari ? "117px" : "150px",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className={`flex mr-2 ml-4 lg:w-64 ${isCari ? "ml-16" : ""}`}>
          <img src={peta} alt='peta' />
          <div className=' ml-6 text-xs sm:text-xs md:text-xs lg:text-sm'>
            {jenisMap ? <p>Peta Kelompok Tani</p> : <p>Peta Lahan</p>}
            <p className='text-xs mt-2'>Lihat persebaran pada:</p>
          </div>
        </div>
        <div className='my-auto mx-2 '>
          {isCari ? (
            <div className='flex lg:w-64'>{kab}</div>
          ) : (
            <div class='inline-block relative xl:w-64 text-sm'>
              <select
                class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  setKab(e.target.value);
                }}
              >
                <option value={"kabupaten"}>Kabupaten </option>
                <option value={"Bandung"}>Bandung</option>
                <option value={"Sumendang"}>Sumedang</option>
              </select>
              <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                <img src={dpDown} alt='dp' />
              </div>
            </div>
          )}
        </div>
        <div className=' my-auto mx-2'>
          {isCari ? (
            <div className='flex lg:w-64'>
              <div className='w-1 h-10 bg-gray-300 rounded mx-6'></div>
              {kec}
            </div>
          ) : (
            <div class='inline-block relative xl:w-64 text-sm '>
              <select
                class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  setKec(e.target.value);
                }}
              >
                <option value={"kecamatan"}>Semua Kecamatan </option>
                <option value={"Cihampelas"}>Cihampelas</option>
                <option value={"dayeuhkolot"}>Dayeuhkolot</option>
              </select>
              <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                <img src={dpDown} alt='dp' />
              </div>
            </div>
          )}
        </div>

        <div className=' my-auto mx-2'>
          {isCari ? (
            <div className='flex lg:w-64'>
              <div className='w-1 h-10 bg-gray-300 rounded mx-6'></div>
              {kel}
            </div>
          ) : (
            <div class='inline-block relative xl:w-64 text-sm mr-5'>
              <select
                class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  setKel(e.target.value);
                }}
              >
                <option value={"kelurahan"}>Semua Kelurahan </option>
                <option value={"mangunarga"}>mangunarga</option>
                <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
              </select>
              <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                <img src={dpDown} alt='dp' />
              </div>
            </div>
          )}
        </div>

        <div className='m-auto'>
          <button
            className={`bg-green-600 rounded w-10 m-auto ${
              isCari ? "lg:ml-12" : "m-auto"
            } `}
            onClick={() => {
              setIsCari(!isCari);
            }}
          >
            <img src={search} alt='cari' className='m-auto p-3' />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

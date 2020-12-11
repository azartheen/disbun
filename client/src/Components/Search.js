import React from "react";
import peta from "../Assets/icPetaBig.svg";
import search from "../Assets/icSearch.svg";
import dpDown from "../Assets/dpDown.svg";
import AppContext from "../Context/AppContext";
import { useQuery } from "urql";
import dataKabKec from "../Assets/kab_kec_des_disbun.json";
import dataKabKecTani from "../Assets/kab_kec_des_tani.json";

const getLoc = `query MyQuery($kab: String, $kec: String, $kel: String) {
  disbun_tanaman(where: {kecamatan_: {_eq: $kec}, kab_: {_eq: $kab}, desa_1: {_eq: $kel}}, limit: 1) {
    x
    y
    id_desa
  }
}
`;

const getLocTani = `query MyQuery($kab: String, $kec: String, $kel: String) {
  disbun_tani(limit: 1, where: {kab_kot: {_eq: $kab}, kec: {_eq: $kec}, kel: {_eq: $kel}}) {
    longitude
    latitude
    id_desa
  }
}`;
export default function Search({ setIsCari }) {
  const { jenisMap, dispatch, kec, kab, kel, isCari } = React.useContext(
    AppContext
  );
  const [listKab, setListKab] = React.useState([]);
  const [listKec, setListKec] = React.useState([]);
  const [listkel, setListKel] = React.useState([]);
  const [disable, setDisable] = React.useState(false);
  const [lok, setLok] = React.useState(null);
  const [kabkec, setKabKec] = React.useState(dataKabKec);

  const [loc] = useQuery({
    query: getLoc,
    variables: { kab: kab, kec: kec, kel: kel },
  });

  const [locTani] = useQuery({
    query: getLocTani,
    variables: { kab: kab, kec: kec, kel: kel },
  });

  React.useEffect(() => {
    if (jenisMap) {
      setKabKec(dataKabKecTani);
    } else {
      setKabKec(dataKabKec);
    }
  }, [jenisMap]);

  React.useEffect(() => {
    if (!jenisMap) {
      if (!loc.data) {
        console.log(loc.error);
        setDisable(true);
      } else {
        if (loc.data.disbun_tanaman.length !== 0) {
          console.log(loc.data.disbun_tanaman[0]);
          const dataTanam = loc.data.disbun_tanaman[0];
          if (lok && lok.id_desa === dataTanam.id_desa) {
            setDisable(true);
          } else {
            setDisable(false);
          }
          setLok(dataTanam);
        } else {
          setDisable(true);
        }
      }
    }
  }, [loc, jenisMap]);

  React.useEffect(() => {
    if (jenisMap) {
      if (!locTani.data) {
        console.log(locTani.error);
        setDisable(true);
      } else {
        if (locTani.data.disbun_tani.length !== 0) {
          console.log(locTani.data.disbun_tani[0]);
          const dataTanam = locTani.data.disbun_tani[0];
          if (lok && lok.id_desa === dataTanam.id_desa) {
            setDisable(true);
          } else {
            setDisable(false);
          }
          setLok(dataTanam);
        } else {
          setDisable(true);
        }
      }
    }
  }, [locTani, jenisMap]);

  React.useEffect(() => {
    setListKab(Object.keys(kabkec));
    console.log(Object.keys(kabkec));
  }, [kabkec]);

  React.useEffect(() => {
    if (kab !== "") {
      setListKec(Object.keys(kabkec[kab]));
    }
  }, [kab, kabkec]);

  React.useEffect(() => {
    if (kec !== "") {
      setListKel(kabkec[kab][kec]);
    }
  }, [kec, kab, kabkec]);

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
            <div className='flex lg:w-64'>
              {kab === "" ? "Semua Kabupaten" : kab}
            </div>
          ) : (
            <div className='inline-block relative xl:w-64 text-sm'>
              <select
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  dispatch({
                    type: "setKec",
                    payload: "",
                  });
                  dispatch({
                    type: "setKel",
                    payload: "",
                  });
                  dispatch({
                    type: "setKab",
                    payload: e.target.value,
                  });
                }}
                value={kab}
              >
                <option value={""}>Pilih Kabupaten</option>
                {listKab &&
                  listKab.map((data, idx) => (
                    <React.Fragment key={data + idx}>
                      <option value={data}>{data}</option>
                    </React.Fragment>
                  ))}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                <img src={dpDown} alt='dp' />
              </div>
            </div>
          )}
        </div>
        <div className=' my-auto mx-2'>
          {isCari ? (
            <div className='flex lg:w-64'>
              <div className='w-1 h-10 bg-gray-300 rounded mx-6'></div>
              {kec === "" ? "Semua Kecamatan" : kec}
            </div>
          ) : (
            <div className='inline-block relative xl:w-64 text-sm '>
              <select
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  dispatch({
                    type: "setKel",
                    payload: "",
                  });
                  dispatch({
                    type: "setKec",
                    payload: e.target.value,
                  });
                }}
                value={kec}
              >
                <option value={""}>Pilih Kecamatan </option>
                {listKec &&
                  listKec.map((data, idx) => (
                    <React.Fragment key={data + idx}>
                      <option value={data}>{data}</option>
                    </React.Fragment>
                  ))}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                <img src={dpDown} alt='dp' />
              </div>
            </div>
          )}
        </div>

        <div className=' my-auto mx-2'>
          {isCari ? (
            <div className='flex lg:w-64'>
              <div className='w-1 h-10 bg-gray-300 rounded mx-6'></div>
              {kel === "" ? "Semua Kecamatan" : kel}
            </div>
          ) : (
            <div className='inline-block relative xl:w-64 text-sm mr-5'>
              <select
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                onChange={(e) => {
                  dispatch({
                    type: "setKel",
                    payload: e.target.value,
                  });
                }}
                value={kel}
              >
                <option value={""}>Pilih Kelurahan </option>
                {listkel &&
                  listkel.map((data, idx) => (
                    <React.Fragment key={data + idx}>
                      <option value={data}>{data}</option>
                    </React.Fragment>
                  ))}
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                <img src={dpDown} alt='dp' />
              </div>
            </div>
          )}
        </div>

        <div className='m-auto'>
          <button
            disabled={disable}
            className={`${
              disable ? "bg-gray-600 cursor-not-allowed" : "bg-green-600"
            } rounded w-10 m-auto ${isCari ? "lg:ml-12" : "m-auto"} `}
            onClick={() => {
              setIsCari(!isCari);
              dispatch({
                type: "setIdDesa",
                payload: lok,
              });
            }}
          >
            <img src={search} alt='cari' className='m-auto p-3' />
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

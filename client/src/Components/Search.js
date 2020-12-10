import React from "react";
import peta from "../Assets/icPetaBig.svg";
import search from "../Assets/icSearch.svg";
import dpDown from "../Assets/dpDown.svg";
import AppContext from "../Context/AppContext";
import { useQuery } from "urql";
import dataKabKec from "../Assets/kab_kec_des_disbun.json";

// const kabDisbun = `
// query MyQuery {
//   disbun_tani(distinct_on: kab_kot) {
//     kab_kot
//   }
// }`;

// const kecDisbun = `query MyQuery($kab:String) {
//   disbun_tani(distinct_on: kec, where: {kab_kot: {_eq: $kab}}) {
//     kec
//   }
// }
// `;

// const kelDisbun = `query MyQuery($kec:String) {
//   disbun_tani(distinct_on: kel, where: {kec: {_eq: $kec}}) {
//     kel
//   }
// }
// `;

const getLoc = `query MyQuery($kab: String, $kec: String, $kel: String) {
  disbun_tanaman(where: {kecamatan_: {_eq: $kec}, kab_: {_eq: $kab}, desa_1: {_eq: $kel}}, limit: 1) {
    x
    y
    id_desa
  }
}
`;

export default function Search({ isCari, setIsCari }) {
  const { jenisMap, dispatch, kec, kab, kel } = React.useContext(AppContext);
  const [listKab, setListKab] = React.useState([]);
  const [listKec, setListKec] = React.useState([]);
  const [listkel, setListKel] = React.useState([]);
  const [lok, setLok] = React.useState();
  // const [newQueryKab, setnewQueryKab] = React.useState(kabTanam);
  // const [newQueryKec, setnewQueryKec] = React.useState(kecTanam);
  // const [newQueryKel, setnewQueryKel] = React.useState(kelTanam);
  // const [res] = useQuery({
  //   query: newQueryKab,
  // });

  const [loc] = useQuery({
    query: getLoc,
    variables: { kab: kab, kec: kec, kel: kel },
  });

  // const [resKec] = useQuery({
  //   query: newQueryKec,
  //   variables: { kab: kab },
  // });

  // const [resKel] = useQuery({
  //   query: newQueryKel,
  //   variables: { kec: kec },
  // });

  React.useEffect(() => {
    if (!loc.data) {
      console.log(loc.error);
    } else {
      setLok(loc.data.disbun_tanaman);
      console.log(loc.data.disbun_tanaman);
    }
  }, [loc]);

  // React.useEffect(() => {
  //   if (!resKel.data) {
  //     console.log(resKel.error);
  //   } else {
  //     if (jenisMap) {
  //       setListKel(resKel.data.disbun_tani);
  //     } else {
  //       setListKel(resKel.data.disbun_tanaman);
  //     }
  //   }
  // }, [resKel]);

  // React.useEffect(() => {
  //   if (!resKec.data) {
  //     console.log(resKec.error);
  //   } else {
  //     if (jenisMap) {
  //       setListKec(resKec.data.disbun_tani);
  //     } else {
  //       setListKec(resKec.data.disbun_tanaman);
  //     }
  //   }
  // }, [resKec]);

  // React.useEffect(() => {
  //   if (!res.data) {
  //     console.log(res.error);
  //   } else {
  //     if (jenisMap) {
  //       setListKab(res.data.disbun_tani);
  //     } else {
  //       setListKab(res.data.disbun_tanaman);
  //     }
  //   }
  // }, [res]);

  React.useEffect(() => {
    setListKab(Object.keys(dataKabKec));
    console.log(Object.keys(dataKabKec));
  }, [dataKabKec]);

  React.useEffect(() => {
    if (kab !== "") {
      setListKec(Object.keys(dataKabKec[kab]));
      console.log(Object.keys(dataKabKec[kab]));
    }
  }, [kab]);

  React.useEffect(() => {
    if (kec !== "") {
      setListKel(dataKabKec[kab][kec]);
    }
  }, [kec]);

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
                    type: "setKab",
                    payload: e.target.value,
                  });
                }}
                value={kab}
              >
                <option value={""}>Semua Kabupaten</option>
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
                    type: "setKec",
                    payload: e.target.value,
                  });
                }}
                value={kec}
              >
                <option value={""}>Semua Kecamatan </option>
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
                <option value={""}>Semua Kelurahan </option>
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

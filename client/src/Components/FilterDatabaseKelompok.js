import React from "react";
import dpDown from "../Assets/dpDown.svg";
import { useQuery } from "urql";

const searchDatabase = `
query MyQuery {
  komoditas: disbun_tani( distinct_on: komoditas_utama) {
    komoditas_utama
  }
   kelas: disbun_tani( distinct_on: kelas_kelompok) {
    kelas_kelompok
  }
   koperasi: disbun_tani(distinct_on: nama_koperasi) {
    nama_koperasi
  }
}`;

export default function FilterDatabaseKelompok() {
  const [listKomoditas, setListKomoditas] = React.useState([]);
  const [listKelas, setListKelas] = React.useState([]);
  const [listKoperasi, setListKoperasi] = React.useState([]);

  const [res] = useQuery({
    query: searchDatabase,
  });
  React.useEffect(() => {
    if (!res.data) {
      console.log(res.error);
    } else {
      setListKomoditas(res.data.komoditas);
      setListKelas(res.data.kelas);
      setListKoperasi(res.data.koperasi);
    }
  }, [res]);

  return (
    <div classname={`transition-all duration-300 ease-linear`}>
      <div className='flex text-sm w-full mt-3'>
        <div className='w-1/4 mr-4'>
          <p className='text-xs my-2'>Komoditas Utama</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={""}>Semua Komoditas </option>
              {listKomoditas &&
                listKomoditas.map((data, idx) => (
                  <React.Fragment key={data + idx}>
                    <option value={data.komoditas_utama}>
                      {data.komoditas_utama}
                    </option>
                  </React.Fragment>
                ))}
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>

        <div className='w-1/4 mx-4'>
          <p className='text-xs my-2'>Koperasi Desa</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={""}>Semua Koperasi </option>
              {listKoperasi &&
                listKoperasi.map((data, idx) => (
                  <React.Fragment key={data + idx}>
                    <option value={data.nama_koperasi}>
                      {data.nama_koperasi}
                    </option>
                  </React.Fragment>
                ))}
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/4 mx-4'>
          <p className='text-xs my-2'>Kelas Kelompok</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={""}>Semua Kelas </option>
              {listKelas &&
                listKelas.map((data, idx) => (
                  <React.Fragment key={data + idx}>
                    <option value={data.kelas_kelompok}>
                      {data.kelas_kelompok}
                    </option>
                  </React.Fragment>
                ))}
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/4 mx-2'>
          <p className='text-xs my-2'>Tahun Berdiri</p>
          <div className='flex'>
            <div class='inline-block relative w-full mr-4'>
              <input
                type='text'
                id='email'
                name='email'
                // value={username}
                onChange={(e) => {
                  // setUsername(e.target.value);
                }}
                placeholder='tahun'
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              ></input>
            </div>
            <div
              className='w-10 m-auto bg-gray-500 mr-4 rounded'
              style={{ height: "2px" }}
            ></div>
            <div class='inline-block relative w-full mr-12'>
              <input
                type='text'
                id='email'
                name='email'
                // value={username}
                onChange={(e) => {
                  // setUsername(e.target.value);
                }}
                placeholder='tahun'
                className='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

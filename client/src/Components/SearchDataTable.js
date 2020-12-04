import React from "react";
import dpDown from "../Assets/dpDown.svg";
import search from "../Assets/icSearch.svg";
import arrow from "../Assets/arrow.svg";
import FilterDataKelembagaan from "./FilterDataKelembagaan";
import FilterDatabaseKelompok from "./FilterDatabaseKelompok";
import FilterDataPerlindungan from "./FilterDataPerlindungan";
import FilterDataPengolahan from "./FilterDataPengolahan";
import FilterDataProduksi from "./FilterDataProduksi";
import FilterDataSertifikasi from "./FilterDataSertifikasi";
import FilterDataPerkebunan from "./FilterDataPerkebunan";
export default function SearchDataTable({ jenis, show, setShow }) {
  return (
    <div className='mx-20 my-10 rounded shadow p-5'>
      <p>Pencarian</p>
      <div className='flex text-sm w-full mt-3 justify-between'>
        <div className='w-1/4 mr-4'>
          <p className='text-xs my-2'>Nama Kelompok</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={"kelurahan"}>Semua Kelurahan </option>
              <option value={"mangunarga"}>mangunarga</option>
              <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>

        <div className='w-1/4 mx-4'>
          <p className='text-xs my-2'>Kabupaten/Kota</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={"kelurahan"}>Semua Kelurahan </option>
              <option value={"mangunarga"}>mangunarga</option>
              <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/4 mx-4'>
          <p className='text-xs my-2'>Kecamatan</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={"kelurahan"}>Semua Kelurahan </option>
              <option value={"mangunarga"}>mangunarga</option>
              <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/4 mx-4'>
          <p className='text-xs my-2'>Kelurahan/Desa</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={"kelurahan"}>Semua Kelurahan </option>
              <option value={"mangunarga"}>mangunarga</option>
              <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <button
            className={`bg-green-600 rounded w-10 m-auto`}
            onClick={() => {}}
          >
            <img src={search} alt='cari' className='m-auto p-3' />
          </button>
        </div>
      </div>
      {/* tipedua */}
      {show ? (
        <React.Fragment>
          {jenis === "Data Base Kelompok" ? (
            <FilterDatabaseKelompok />
          ) : jenis === "Kelembagaan Kelompok" ? (
            <FilterDataKelembagaan />
          ) : jenis === "Pengembangan dan Perlindungan" ? (
            <FilterDataPerlindungan />
          ) : jenis === "Data Produksi" ? (
            <FilterDataProduksi />
          ) : jenis === "Pengolahan dan Pemasaran" ? (
            <FilterDataPengolahan />
          ) : jenis === "Produksi dan Sertifikasi Benih" ? (
            <FilterDataSertifikasi />
          ) : jenis === "Perlindungan Perkebunan" ? (
            <FilterDataPerkebunan />
          ) : null}
        </React.Fragment>
      ) : null}

      {/* toggle */}
      <div className='w-full mt-4 flex'>
        <button
          className='rounded-lg p-1 px-6 bg-gray-200 m-auto '
          onClick={() => {
            setShow(!show);
          }}
        >
          <img
            src={arrow}
            alt='toggle'
            className={`transition-all duration-300 ease-linear ${
              show ? "transform rotate-0" : "transform rotate-180"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

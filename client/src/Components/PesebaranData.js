import React from "react";
import BarChart from "./BarChart";
import DougnutChart from "./DougnutChart";

export default function PesebaranData() {
  const [tipeChart, setTipe] = React.useState("tani");
  return (
    <div className='mt-16 flex'>
      <div className='w-1/3'>
        <div>
          <p className='text-lg font-medium'>Persebaran Data</p>
          <p className='text-xs'>Chart</p>
        </div>
        <div className='mt-5 text-sm'>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "tani"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("tani");
              }}
            >
              Kelompok Tani
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "perlindungan"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("perlindungan");
              }}
            >
              Pengembangan dan Perlindungan
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "produksi"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("produksi");
              }}
            >
              Data Produksi
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "Perkebunan"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("Perkebunan");
              }}
            >
              Perlindungan Perkebunan
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "Sertifikasi"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("Sertifikasi");
              }}
            >
              Produksi dan Sertifikasi Benih
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "PPUP"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("PPUP");
              }}
            >
              PPUP
            </button>
          </div>
        </div>
      </div>
      <div className='w-2/3'>
        <p className='text-3xl font-medium'>Data Kelompok Tani</p>
        <div className='rounded border p-6 my-8 text-lg'>
          <p className='my-4'>Jumlah Kelompok Tani Per-Kabupaten/Kota </p>
          <BarChart />
          <div className='w-full h-1 bg-gray-200 my-16'></div>
          {/* <p className='my-6'>Pembangunan Kelompok Tani</p>
          <DougnutChart /> */}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import icTable from "../Assets/tableWhite.svg";
import dpdown from "../Assets/dpdownWhite.svg";
import SearchDataTable from "../Components/SearchDataTable";
import grupIc from "../Assets/grup.svg";
import leafIc from "../Assets/leaf.svg";
import noteIc from "../Assets/note.svg";
import grupGreen from "../Assets/grupGreen.svg";
import leafGreen from "../Assets/leafGreen.svg";
import noteGreen from "../Assets/noteGreen.svg";
import Table from "../Components/Table";

export default function TableData() {
  const [jenis, setJenis] = React.useState("Data Base Kelompok");
  const [showListTable, setListTable] = React.useState(false);
  const [moreFilter, setMoreFilter] = React.useState(false);
  return (
    <div>
      <div className='flex justify-between mt-32 mx-20 text-sm'>
        <p className='text-3xl font-bold'>Tabel {jenis}</p>
        <div className='flex'>
          <div
            className='rounded-md flex bg-green-600 text-white mr-4'
            style={{ height: "45px" }}
          >
            <img src={icTable} alt='tambah' className='p-3' />
            <p className='py-3 pr-2'>Tambah Kelompok</p>
            <button className='py-3 px-4 bg-green-700 rounded-r-md'>+</button>
          </div>
          <div
            className='rounded-md flex bg-green-600 text-white relative'
            style={{ height: "45px" }}
          >
            <img src={icTable} alt='tambah' className='p-3' />
            <p className='py-3 pr-2'>Ganti Table</p>
            <button
              className='py-3 px-4 bg-green-700 rounded-r-md'
              onClick={() => {
                setListTable(!showListTable);
              }}
            >
              <img src={dpdown} alt='dpdpown' />
            </button>
          </div>
          {showListTable ? (
            <div className=' absolute right-0 mt-12 mr-20 rounded shadow-lg bg-white border z-10 text-left'>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Data Base Kelompok");
                }}
              >
                <img
                  src={jenis === "Data Base Kelompok" ? grupGreen : grupIc}
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Data Base Kelompok" ? "text-green-600" : ""
                  }`}
                >
                  Data Base Kelompok
                </p>
              </button>
              <div className='mx-3 bg-gray-200' style={{ height: "1px" }}></div>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Kelembagaan Kelompok");
                }}
              >
                <img
                  src={jenis === "Kelembagaan Kelompok" ? grupGreen : grupIc}
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Kelembagaan Kelompok" ? "text-green-600" : ""
                  }`}
                >
                  Kelembagaan Kelompok
                </p>
              </button>
              <div className='mx-3 bg-gray-200' style={{ height: "1px" }}></div>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Pengembangan dan Perlindungan");
                }}
              >
                <img
                  src={
                    jenis === "Pengembangan dan Perlindungan"
                      ? noteGreen
                      : noteIc
                  }
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Pengembangan dan Perlindungan"
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  Pengembangan dan Perlindungan
                </p>
              </button>
              <div className='mx-3 bg-gray-200' style={{ height: "1px" }}></div>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Data Produksi");
                }}
              >
                <img
                  src={jenis === "Data Produksi" ? leafGreen : leafIc}
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Data Produksi" ? "text-green-600" : ""
                  }`}
                >
                  Data Produksi
                </p>
              </button>
              <div className='mx-3 bg-gray-200' style={{ height: "1px" }}></div>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Pengolahan dan Pemasaran");
                }}
              >
                <img
                  src={
                    jenis === "Pengolahan dan Pemasaran" ? noteGreen : noteIc
                  }
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Pengolahan dan Pemasaran" ? "text-green-600" : ""
                  }`}
                >
                  Pengolahan dan Pemasaran
                </p>
              </button>
              <div className='mx-3 bg-gray-200' style={{ height: "1px" }}></div>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Produksi dan Sertifikasi Benih");
                }}
              >
                <img
                  src={
                    jenis === "Produksi dan Sertifikasi Benih"
                      ? leafGreen
                      : leafIc
                  }
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Produksi dan Sertifikasi Benih"
                      ? "text-green-600"
                      : ""
                  }`}
                >
                  Produksi dan Sertifikasi Benih
                </p>
              </button>
              <div className='mx-3 bg-gray-200' style={{ height: "1px" }}></div>
              <button
                className='flex p-3 w-full hover:bg-gray-200'
                onClick={() => {
                  setJenis("Perlindungan Perkebunan");
                }}
              >
                <img
                  src={jenis === "Perlindungan Perkebunan" ? leafGreen : leafIc}
                  alt='img'
                  className='mx-2 m-auto'
                />
                <p
                  className={`mr-10 ${
                    jenis === "Perlindungan Perkebunan" ? "text-green-600" : ""
                  }`}
                >
                  Perlindungan Perkebunan
                </p>
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <SearchDataTable
        jenis={jenis}
        show={moreFilter}
        setShow={setMoreFilter}
      />
      <Table />
    </div>
  );
}

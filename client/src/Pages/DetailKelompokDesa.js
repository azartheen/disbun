import React from "react";
import back from "../Assets/backArrow.svg";
import bgDetail from "../Assets/bgDetail.svg";
import kkn from "../Assets/kkn.png";
import Footer from "../Components/Footer";
import grupIc from "../Assets/grup.svg";
import leafIc from "../Assets/leaf.svg";
import noteIc from "../Assets/note.svg";
import grupGreen from "../Assets/grupGreen.svg";
import leafGreen from "../Assets/leafGreen.svg";
import noteGreen from "../Assets/noteGreen.svg";
import DatabaseKelompokDetail from "../Components/Detail/DatabaseKelompokDetail";
import KelembagaanKelompokDetail from "../Components/Detail/KelembagaanKelompokDetail";
import PengembanganDanPerlindunganDetail from "../Components/Detail/PengembanganDanPerlindunganDetail";
import DataProduksiDetail from "../Components/Detail/DataProduksiDetail";
import PengolahanDanPemasaranDetail from "../Components/Detail/PengolahanDanPemasaranDetail";
import ProduksiDanSertifikasiDetail from "../Components/Detail/ProduksiDanSertifikasiDetail";
import PerlindunganDanPerkebunanDetail from "../Components/Detail/PerlindunganDanPerkebunanDetail";

export default function DetailKelompokDesa() {
  const [jenis, setJenis] = React.useState("Data Base Kelompok");

  return (
    <div>
      <div className='mx-20 my-5'>
        <div className='flex mt-24'>
          <button className='mr-4 p-3'>
            <img src={back} alt='bakc' />
          </button>
          <p className='text-lg my-auto'>Detail Kelompok Desa</p>
        </div>
        <div
          className='relative rounded-lg my-4'
          style={{
            color: "799373",
            height: "156px",
            backgroundColor: "#799373",
          }}
        >
          <div className='m-auto text-white'>
            <img
              src={bgDetail}
              alt='bgDetail'
              className='m-auto absolute right-0'
            />

            <div className='h-full flex'>
              <img src={kkn} alt='kkn' className='my-auto' />
              <div className='mb-0 ml-8'>
                <p>Nama Kelompok Desa</p>
                <p>3217152002-006</p>
                <p>
                  Komoditas Kopi Nama Kabupaten Nama Kecamatan Nama Kelurahan
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='rounded-lg shadow flex border'>
          <div className='w-1/3 rounded-l'>
            <div className='rounded bg-white text-left'>
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
          </div>
          <div className='w-2/3 border-l rounded-r'>
            <React.Fragment>
              {jenis === "Data Base Kelompok" ? (
                <DatabaseKelompokDetail />
              ) : jenis === "Kelembagaan Kelompok" ? (
                <KelembagaanKelompokDetail />
              ) : jenis === "Pengembangan dan Perlindungan" ? (
                <PengembanganDanPerlindunganDetail />
              ) : jenis === "Data Produksi" ? (
                <DataProduksiDetail />
              ) : jenis === "Pengolahan dan Pemasaran" ? (
                <PengolahanDanPemasaranDetail />
              ) : jenis === "Produksi dan Sertifikasi Benih" ? (
                <ProduksiDanSertifikasiDetail />
              ) : jenis === "Perlindungan Perkebunan" ? (
                <PerlindunganDanPerkebunanDetail />
              ) : null}
            </React.Fragment>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

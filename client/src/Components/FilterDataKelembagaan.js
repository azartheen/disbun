import dpDown from "../Assets/dpDown.svg";
import React from "react";

export default function FilterDataKelembagaan() {
  return (
    <div>
      <div classname={`transition-all duration-300 ease-linear`}>
        <div className='flex text-sm w-full mt-3'>
          <div className='w-1/4 mr-4'>
            <p className='text-xs my-2'>Jumlah Anggota</p>
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
            <p className='text-xs my-2'>Jumlah Anggota</p>
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
            <p className='text-xs my-2'>Legalitas Lembaga</p>
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
          <div className='w-1/4 mx-2'>
            <p className='text-xs my-2'>Tahun Berdiri</p>
            <div className='flex'>
              <div class='inline-block relative w-full mr-4'>
                <select
                  class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                  onChange={(e) => {
                    // setKel(e.target.value);
                  }}
                >
                  <option value={"kelurahan"}>2020</option>
                  <option value={"mangunarga"}>mangunarga</option>
                  <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
                </select>
                <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
                  <img src={dpDown} alt='dp' className='m-auto' />
                </div>
              </div>
              <div
                className='w-10 m-auto bg-gray-500 mr-4 rounded'
                style={{ height: "2px" }}
              ></div>
              <div class='inline-block relative w-full mr-12'>
                <select
                  class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
                  onChange={(e) => {
                    // setKel(e.target.value);
                  }}
                >
                  <option value={"kelurahan"}>2021 </option>
                  <option value={"mangunarga"}>mangunarga</option>
                  <option value={"Cangkuang wetan"}>Cangkuang wetan</option>
                </select>
                <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
                  <img src={dpDown} alt='dp' className='m-auto' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div classname={`transition-all duration-300 ease-linear`}>
        <div className='flex text-sm w-full mt-3'>
          <div className='w-1/4 mr-4'>
            <p className='text-xs my-2'>BIMTEK Kelembagaan</p>
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
            <p className='text-xs my-2'>Prestasi Kelompok</p>
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
            <p className='text-xs my-2'>Kepemilikan Koperasi</p>
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
        </div>
      </div>
    </div>
  );
}

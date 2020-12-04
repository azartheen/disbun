import React from "react";
import dpDown from "../Assets/dpDown.svg";

export default function FilterDataPerkebunan() {
  return (
    <div>
      <div classname={`transition-all duration-300 ease-linear`}>
        <div className='flex text-sm w-full mt-3'>
          <div className='w-1/4 mr-4'>
            <p className='text-xs my-2'>Pengendalian Hama Eksplosif</p>
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
            <p className='text-xs my-2'>Pengendalian Hama Non-Eksplosif</p>
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
            <p className='text-xs my-2'>Jumlah Bimbingan</p>
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

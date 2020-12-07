import React from "react";
import dpDown from "../../Assets/dpDown.svg";

export default function DatabaseKelompokDetail() {
  const [username, setUsername] = React.useState("");

  return (
    <div className='w-full pb-5'>
      <p className='text-gray-700 m-8'>Data Base Kelompok Desa</p>
      <div className='m-6 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Nama Kelompok</p>
          <input
            type='text'
            id='email'
            name='email'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder='Nama'
            className='p-2 my-4 w-full border rounded'
          ></input>
        </div>
        <div className='w-1/3 mx-2 '>
          <p className='text-xs'>Kode Kelompok</p>
          <input
            type='text'
            id='email'
            name='email'
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder='Kode Kelompok'
            className='p-2 my-4 w-full border rounded'
          ></input>
        </div>
        <div className='w-1/3 mx-2'>
          <p className='text-xs my-2'>Komoditas Utama</p>
          <div class='inline-block relative w-full mr-4'>
            <select
              class='block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-2 py-2 pr-8 rounded focus:outline-none focus:shadow-outline'
              onChange={(e) => {
                // setKel(e.target.value);
              }}
            >
              <option value={"kelurahan"}>Pilih Komoditas </option>
              <option value={"mangunarga"}>mangunarga</option>
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
      </div>
      <div className='m-6 flex text-xs'>
        <div className='w-1/3 mx-2'>
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
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/3 mx-2'>
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
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
        <div className='w-1/3 mx-2'>
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
            </select>
            <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2'>
              <img src={dpDown} alt='dp' className='m-auto' />
            </div>
          </div>
        </div>
      </div>
      <div className='justify-end flex mx-8'>
        <button className='py-1 px-6 rounded bg-green-600 text-white'>
          <p>Edit</p>
        </button>
      </div>
    </div>
  );
}

import React from "react";

export default function PengembanganDanPerlindunganDetail() {
  const [username, setUsername] = React.useState("");

  return (
    <div className='w-full pb-5'>
      <p className='text-gray-700 m-8'>Data Pengembangan dan Perlindungan</p>
      <p className='text-gray-700 mx-8 my-4'>Penataan Lahan</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Ketinggian Rata-Rata (M-DPL)</p>
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
          <p className='text-xs'>Topografi (Kemiringan Lahan)</p>
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
          <p className='text-xs'>Jenis Tanah Terluas</p>
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
      </div>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Curah Hujan Rata-Rata</p>
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
          <p className='text-xs'>Demplot Konservasi Lahan</p>
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
      </div>
      <p className='text-gray-700 mx-8 my-4'>Perlindungan Perkebunan</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Antisipasi Perubahan Iklim</p>
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
          <p className='text-xs'>Lokasi GUP</p>
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
          <p className='text-xs'>Pengelolaan DAS</p>
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
      </div>

      <p className='text-gray-700 mx-8 my-4'>Prasarana Perkebunan</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Jenis Prasarana</p>
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
          <p className='text-xs'>Tahun Pembangunan</p>
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
          <p className='text-xs'>Kondisi Terkini</p>
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
      </div>

      <p className='text-gray-700 mx-8 my-4'>Pembinaan</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Bimtek/Sosialisasi Penataan Lahan</p>
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
          <p className='text-xs'>Bimtek/Sosialisasi Perlindungan Perkebunan</p>
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
          <p className='text-xs'>Bimtek/Sosialisasi Pembangunan Prasarana</p>
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
      </div>

      <div className='justify-end flex mx-8'>
        <button className='py-1 px-6 rounded bg-green-600 text-white'>
          <p>Edit</p>
        </button>
      </div>
    </div>
  );
}

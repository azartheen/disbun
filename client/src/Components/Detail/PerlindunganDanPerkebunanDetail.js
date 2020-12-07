import React from "react";

export default function PerlindunganDanPerkebunanDetail() {
  const [username, setUsername] = React.useState("");

  return (
    <div className='w-full pb-5'>
      <p className='text-gray-700 m-8'>Perlindungan Perkebunan</p>
      <p className='text-gray-700 mx-8 my-4'>Pengendalian Hama Eksplosif</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Komoditas</p>
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
          <p className='text-xs'>Tahun</p>
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
          <p className='text-xs'>Tindakan</p>
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

      <p className='text-gray-700 mx-8 my-4'>Pengendalian Hama Non Eksplosif</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/4 mx-2'>
          <p className='text-xs'>Komoditas</p>
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
        <div className='w-1/4 mx-2 '>
          <p className='text-xs'>Tingkat Serangan</p>
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
        <div className='w-1/4 mx-2 '>
          <p className='text-xs'>Tahun</p>
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
        <div className='w-1/4 mx-2 '>
          <p className='text-xs'>Tindakan</p>
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

      <p className='text-gray-700 mx-8 my-4'>
        Pengembangan Agen Pengendali Hayati
      </p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Jenis</p>
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
          <p className='text-xs'>Volume</p>
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
          <p className='text-xs'>Tahun</p>
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

      <p className='text-gray-700 mx-8 my-4'>Pengembangan Pestisida Nabati</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Jenis</p>
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
          <p className='text-xs'>Volume</p>
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
          <p className='text-xs'>Tahun</p>
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
      <p className='text-gray-700 mx-8 my-4'>Bimtek/Sosialisasi/Diseminasi</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Jenis</p>
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
          <p className='text-xs'>Volume</p>
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
          <p className='text-xs'>Tahun</p>
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

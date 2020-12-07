import React from "react";

export default function ProduksiDanSertifikasiDetail() {
  const [username, setUsername] = React.useState("");

  return (
    <div className='w-full pb-5'>
      <p className='text-gray-700 m-8'>Data Produksi dan Sertifikasi Benih</p>
      <p className='text-gray-700 mx-8 my-4'>Penangkar Benih (IUB)</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/4 mx-2'>
          <p className='text-xs'>Nomor</p>
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
          <p className='text-xs'>Luas</p>
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
          <p className='text-xs'>Jenis Komoditas</p>
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

      <p className='text-gray-700 mx-8 my-4'>Kebun Benih</p>
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
          <p className='text-xs'>Luas</p>
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
          <p className='text-xs'>Tahun Pembinaan</p>
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

      <p className='text-gray-700 mx-8 my-4'>PBT/PIT</p>
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
          <p className='text-xs'>Luas</p>
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
          <p className='text-xs'>Tahun Pembinaan</p>
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

      <p className='text-gray-700 mx-8 my-4'>Sertifikasi Benih</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/2 mx-2'>
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
        <div className='w-1/2 mx-2 '>
          <p className='text-xs'>Jumlah</p>
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

      <p className='text-gray-700 mx-8 my-4'>Bimtek</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/2 mx-2'>
          <p className='text-xs'>Nama Bimtek</p>
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
        <div className='w-1/2 mx-2 '>
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

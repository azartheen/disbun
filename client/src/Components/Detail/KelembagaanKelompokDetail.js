import React from "react";
import dpDown from "../../Assets/dpDown.svg";

export default function KelembagaanKelompokDetail() {
  const [username, setUsername] = React.useState("");

  return (
    <div className='w-full pb-5'>
      <p className='text-gray-700 m-8'>Kelembagaan Kelompok</p>
      <p className='text-gray-700 mx-8 my-4'>Data Pengurus</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Nama Ketua</p>
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
          <p className='text-xs'>Nama Wakil Ketua</p>
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
          <p className='text-xs'>Nama Sekretaris</p>
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
          <p className='text-xs'>No. HP Ketua</p>
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
          <p className='text-xs'>No. HP Wakil Ketua</p>
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
          <p className='text-xs'>No. HP Sekretaris</p>
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
      <p className='text-gray-700 mx-8 my-4'>Anggota</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Laki-Laki</p>
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
          <p className='text-xs'>Perempuan</p>
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
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/2 mx-2'>
          <p className='text-xs'>Tahun Berdiri</p>
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
        <div className='w-1/2 mx-2'>
          <p className='text-xs my-2'>Kelas Kelompok</p>
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

      <p className='text-gray-700 mx-8 my-4'>Legalitas Kelembagaan</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>SK Pembentukan</p>
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
          <p className='text-xs'>Akta Notaris</p>
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
          <p className='text-xs'>AHU</p>
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

      <p className='text-gray-700 mx-8 my-4'>Bimtek Kelembagaan</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>WUB / Kompetensi</p>
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
          <p className='text-xs'>Penumbuhan Kebersamaan</p>
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
          <p className='text-xs'>Penguatan Kelembagaan</p>
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

      <p className='text-gray-700 mx-8 my-4'>Prestasi Kelompok</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/4 mx-2'>
          <p className='text-xs'>Tingkat Kabupaten</p>
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
          <p className='text-xs'>Tingkat Provinsi</p>
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
          <p className='text-xs'>Tingkat Nasional</p>
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
          <p className='text-xs'>Tingkat Internasional</p>
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

      <p className='text-gray-700 mx-8 my-4'>Kepemilikan Koperasi</p>
      <div className='mx-6 my-4 flex text-xs'>
        <div className='w-1/3 mx-2'>
          <p className='text-xs'>Nama Koperasi</p>
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
          <p className='text-xs'>Nomor Akta</p>
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
          <p className='text-xs'>Usaha Pokok</p>
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

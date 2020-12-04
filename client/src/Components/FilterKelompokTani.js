import React from "react";
import dpDown from "../Assets/dpDown.svg";
import cengkeh from "../Assets/cengkeh.svg";
import tea from "../Assets/tea.svg";
import tree from "../Assets/tree.svg";
import kopi from "../Assets/coffee.svg";
import checked from "../Assets/checked.svg";
import unChecked from "../Assets/unChecked.svg";

const data = [
  {
    name: "teh",
    img: tea,
  },
  {
    name: "Kopi Arabika",
    img: kopi,
  },
  {
    name: "Kopi Robusta",
    img: kopi,
  },
  {
    name: "Karet",
    img: tree,
  },
  {
    name: "Kakao",
    img: kopi,
  },
  {
    name: "Kelapa",
    img: tree,
  },
  {
    name: "Cengkeh",
    img: cengkeh,
  },
  {
    name: "Tebu",
    img: tree,
  },
  {
    name: "Tembakau",
    img: cengkeh,
  },
];
export default function FilterKelompokTani({ isCari }) {
  const [showKomoditas, setShowKomoditas] = React.useState(false);
  return (
    <React.Fragment>
      {isCari ? (
        <div
          className={`w-1/4 absolute bg-white h-1 p-12 text-gray-700 transition-all duration-700 ease-linear z-10`}
          style={{
            top: "0%",
            left: "0%",
            height: "100%",
          }}
        >
          <div className='m-auto mt-32'>
            <p className='text-lg font-bold'>Tampilan Peta Sebaran</p>
            <p className='text-sm'>Peta Sebaran Kelompok Tani</p>
          </div>
          <div className='m-auto mt-5'>
            <p className='text-sm'>Filter Kelompok</p>
            <div className='flex'>
              <p className='text-xs my-2 w-40 mr-4'>Kelas</p>
              <p className='text-xs my-2 w-40'>Koperasi</p>
            </div>
            <div className='flex text-xs'>
              <div class='inline-block relative w-48 mr-4'>
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
              <div class='inline-block relative w-48'>
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
                <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                  <img src={dpDown} alt='dp' />
                </div>
              </div>
            </div>
            <p className='text-xs my-2'>Tahun Berdiri</p>
            <div className='flex text-xs'>
              <div class='inline-block relative w-48 mr-4'>
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
              <div class='inline-block relative w-48'>
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
                <div class='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-green-600'>
                  <img src={dpDown} alt='dp' />
                </div>
              </div>
            </div>
          </div>
          <div
            className='h-full bg-gray-300 rounded mx-6'
            style={{ width: "2px" }}
          >
            {" "}
          </div>
          <div
            className='flex mt-10'
            onClick={() => {
              setShowKomoditas(!showKomoditas);
            }}
          >
            <div className='bg-gray-200 rounded px-4 py-2'>
              <p className='text-green-700'>9</p>
            </div>
            <div className='mx-2 text-gray-600'>
              <p className='text-sm'>Komoditas Petani</p>
              <p className='text-xs'>Komoditas Utama Kelompok Tani</p>
            </div>
            <img src={dpDown} alt='dp' className='m-auto ml-2' />
          </div>
          {showKomoditas ? (
            <div className='overflow-auto' style={{ height: "250px" }}>
              {data.map((list, idx) => (
                <div className='flex justify-between p-2 py-4'>
                  <div className='flex'>
                    <img src={list.img} alt={list.name} className='mr-2' />
                    <p className='text-left'>{list.name}</p>
                  </div>
                  <button onClick={() => {}}>
                    <img src={unChecked} alt='semua' />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  );
}

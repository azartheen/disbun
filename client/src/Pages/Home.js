import React from "react";
import bgBig from "../Assets/bgDashboardBig.png";
// import bgSmall from "../Assets/bgDashboardLong.png";
import icKomoditas from "../Assets/icKomoditas.svg";
import icLuasKebun from "../Assets/icLuasKebun.svg";
import icPPUP from "../Assets/icPPUP.svg";
import icDesa from "../Assets/icDesa.svg";
import icKelTani from "../Assets/icKelompokTani.svg";
import PesebaranData from "../Components/PesebaranData";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <div className='mx-20 mt-32'>
        <div className='block xl:flex lg:flex text-gray-800'>
          <div
            className='relative w-full rounded-lg h-64 lg:h-auto xl:h-auto'
            style={{
              backgroundImage: `url(${bgBig})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              // backgroundPosition: "center",
            }}
          >
            {/* <img src={bgBig} alt='bg' /> */}

            <div
              className='absolute text-white bottom-0 m-8'
              // style={{
              //   top: "75%",
              //   left: "37%",
              //   transform: "translate(-50%, -50%)",
              // }}
            >
              <p className='font-medium text-3xl'>
                Layanan Integrasi Fitur <br /> Sistem Informasi Perkebunan
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>
          </div>
          <div className='xl:ml-12 lg:ml-10 mt-10 lg:mt-0 xl:mt-0'>
            <div>
              <p className='text-lg font-medium'>Gambaran Umum Perkebunan</p>
              <p className='text-xs'>Provinsi Jawa Barat</p>
            </div>
            <div className='mt-6 border rounded xl:border-0 flex flex-wrap lg:border-0 xl:p-0 lg:p-0 p-4 xl:text-base text-xs lg:text-base'>
              <div className='flex w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icKomoditas} alt='komoditas' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>230</p>
                  <p>Komoditas</p>
                </div>
              </div>
              <div className='flex sm:mt-6 lg:mt-6 md:mt-0 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icLuasKebun} alt='kebun' className='w-full' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>230</p>
                  <p>Luas Perkebunan</p>
                </div>
              </div>
              <div className='flex sm:mt-6 md:mt-0 lg:mt-6 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icDesa} alt='desa' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>230</p>
                  <p>Desa</p>
                </div>
              </div>
              <div className='flex sm:mt-6 lg:mt-6 md:mt-0 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icPPUP} alt='pup' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>230</p>
                  <p>PPUP</p>
                </div>
              </div>
              <div className='flex md:mt-6 lg:mt-6 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icKelTani} alt='tani' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>230</p>
                  <p>Kelompok Tani</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PesebaranData />
      </div>
      <Footer />
    </div>
  );
}

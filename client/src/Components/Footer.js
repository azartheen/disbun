import React from "react";
import icWhite from "../Assets/icLogoDisbunWhite.svg";
import bgFooter from "../Assets/bgFooterBig.svg";
import bgFooterBottom from "../Assets/bgFooterBottom.svg";
import bgFooterTop from "../Assets/bgFooterTop.svg";
import icPhone from "../Assets/icPhone.svg";
import icEmailWhite from "../Assets/icEmailWhite.svg";

import { useHistory } from "react-router-dom";

export default function Footer() {
  const history = useHistory();
  return (
    <div
      className='relative  h-ftlong lg:h-ftbig lg:min-h-ftbigg w-full'
      style={{ backgroundColor: "#2C734D" }}
    >
      <img
        className='hidden lg:block absolute bottom-0 right-0 z-10'
        src={bgFooter}
        alt='bg'
      />
      <img
        className='block lg:hidden absolute top-0 right-0 z-10'
        src={bgFooterTop}
        alt='bg'
      />
      <img
        className='block lg:hidden absolute bottom-0 right-0 z-10'
        src={bgFooterBottom}
        alt='bg'
      />
      <div
        className='block lg:flex text-white text-xs z-20 absolute w-full px-20'
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className='flex w-full lg:w-4/6'>
          <div className='w-1/3 md:w-1/4 lg:w-1/4'>
            <img src={icWhite} alt='white' />
            <div className='mt-5 leading-relaxed'>
              DINAS PERKEBUNAN PROVINSI JAWA BARAT. Jl. Surapati No.67, Sadang
              Serang, Coblong, Kota Bandung, Jawa Barat 40133
            </div>
          </div>
          <div className='w-1/3 md:w-1/4 lg:w-1/4 px-10'>
            <p>Sitemap</p>
            <div className='my-4 mt-8'>
              <div className='my-2'>
                <button
                  onClick={() => {
                    history.push("/");
                  }}
                >
                  Home
                </button>
              </div>
              <div className='my-2'>
                <button
                  onClick={() => {
                    history.push("/map");
                  }}
                >
                  Peta Sebaran
                </button>
              </div>
              <div className='my-2'>
                <button
                  onClick={() => {
                    history.push("/database");
                  }}
                >
                  Table Data
                </button>
              </div>
            </div>
          </div>
          <div className='w-1/3 md:w-2/4 lg:w-2/4'>
            <p>Contact</p>
            <div className='my-4 mt-8'>
              <div className='my-2 flex'>
                <img src={icPhone} alt='tlp' />
                <p className='ml-2'> (022) 2506156</p>
              </div>
              <div className='my-2 flex'>
                <img src={icEmailWhite} alt='mail' />
                <p className='ml-2'>disbun@jabarprov.go.id </p>
              </div>
              <div className='my-2 flex'>
                <img src={icEmailWhite} alt='mail2' />
                <p className='ml-2'>disbun.provjabar@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full mt-10 lg:mt-24 md:w-2/6 lg:w-2/6'>
          <p>© 2020 Dinas Perkebunan Jawa Barat. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

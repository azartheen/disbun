import React from "react";
import bgBig from "../Assets/bgDashboardBig.png";
import icKomoditas from "../Assets/icKomoditas.svg";
import icLuasKebun from "../Assets/icLuasKebun.svg";
import icPPUP from "../Assets/icPPUP.svg";
import icDesa from "../Assets/icDesa.svg";
import icKelTani from "../Assets/icKelompokTani.svg";
import PesebaranData from "../Components/PesebaranData";
import Footer from "../Components/Footer";
import { useQuery } from "urql";

const dataHome = `query MyQuery {
  komoditas: disbun_tani_aggregate {
    aggregate {
      count(distinct: true, columns: komoditas_utama)
    }
  }
  desa : disbun_tani_aggregate {
      aggregate {
        count(distinct: true, columns: kel)
      }
    }
  keltan: disbun_tani_aggregate {
      aggregate {
        count(columns: nama_kelompok_tani)
      }
    }
  luas: disbun_tani_aggregate {
      aggregate {
        count(columns: luas_lahan)
      }
    }
}`;

export default function Home() {
  const [komoditas, setKomoditas] = React.useState("");
  const [luasKebun, setLuasKebun] = React.useState("");
  const [desa, setDesa] = React.useState("");
  const [kelTani, setKelTani] = React.useState("");

  const [res] = useQuery({
    query: dataHome,
  });

  React.useEffect(() => {
    if (!res.data) {
      console.log(res.error);
    } else {
      console.log(res.data);
      const dat = res.data;
      setDesa(dat.desa.aggregate.count);
      setKomoditas(dat.komoditas.aggregate.count);
      setLuasKebun(dat.luas.aggregate.count);
      setKelTani(dat.keltan.aggregate.count);
    }
  }, [res]);

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
            }}
          >
            <div className='absolute text-white bottom-0 m-8'>
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
                  <p className='font-medium'>{komoditas}</p>
                  <p>Komoditas</p>
                </div>
              </div>
              <div className='flex sm:mt-6 lg:mt-6 md:mt-0 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icLuasKebun} alt='kebun' className='w-full' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>{luasKebun}</p>
                  <p>Luas Perkebunan</p>
                </div>
              </div>
              <div className='flex sm:mt-6 md:mt-0 lg:mt-6 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icDesa} alt='desa' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>{desa}</p>
                  <p>Desa</p>
                </div>
              </div>
              <div className='flex sm:mt-6 lg:mt-6 md:mt-0 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icPPUP} alt='pup' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>672</p>
                  <p>PPUP</p>
                </div>
              </div>
              <div className='flex md:mt-6 lg:mt-6 xl:mt-6 w-1/2 md:w-1/4 lg:w-full xl:w-full'>
                <div>
                  <img src={icKelTani} alt='tani' />
                </div>
                <div className='ml-4'>
                  <p className='font-medium'>{kelTani}</p>
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

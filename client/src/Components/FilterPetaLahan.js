import React from "react";
import dpDown from "../Assets/dpDown.svg";
import cengkeh from "../Assets/cengkeh.svg";
import tea from "../Assets/tea.svg";
import tree from "../Assets/tree.svg";
import kopi from "../Assets/coffee.svg";
import checked from "../Assets/checked.svg";
import unChecked from "../Assets/unChecked.svg";
import { useQuery } from "urql";
import AppContext from "../Context/AppContext";

const listTanaman = `query MyQuery($kab:String, $kec:String, $kel:String) {
  disbun_tanaman(distinct_on: tanaman, where: {kecamatan_: {_eq: $kec}, kab_: {_eq: $kab}, desa_1: {_eq: $kel}}) {
    tanaman
  }
}`;

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
export default function FilterPetaLahan({ isCari }) {
  const { kec, kel, kab } = React.useContext(AppContext);
  const [showKomoditas, setShowKomoditas] = React.useState(false);
  const [listKomo, setListKomo] = React.useState([]);

  const [res] = useQuery({
    query: listTanaman,
    variables: { kec: kec, kab: kab, kel: kel },
  });

  React.useEffect(() => {
    if (!res.data) {
      console.log(res.error);
    } else {
      console.log(res.data.disbun_tanaman);
      setListKomo(res.data.disbun_tanaman);
    }
  }, [res]);

  return (
    <React.Fragment>
      {isCari ? (
        <div
          className={`w-1/4 absolute h-screen bg-white p-12 text-gray-700 transition-all delay-700 duration-700 ease-linear z-10`}
          style={{
            top: "0%",
            left: "0%",
            height: "100%",
          }}
        >
          <div className='m-auto mt-32'>
            <p className='text-lg font-bold'>Tampilan Peta Sebaran</p>
            <p className='text-sm'>Peta Sebaran Lahan</p>
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
              <p className='text-sm'>Kecocokan Lahan</p>
              <p className='text-xs'>Berdasarkan Komoditi</p>
            </div>
            <img src={dpDown} alt='dp' className='m-auto ml-2' />
          </div>
          {showKomoditas ? (
            <div className='overflow-auto' style={{ height: "250px" }}>
              {listKomo.map((list, idx) => (
                <div className='flex justify-between p-2 py-4'>
                  <div className='flex'>
                    {/* <img src={list.img} alt={list.name} className='mr-2' /> */}
                    <p className='text-left'>{list.tanaman}</p>
                  </div>
                  <button onClick={() => {}}>
                    <img src={unChecked} alt='semua' />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
          {/* <div
            className='flex mt-10'
            onClick={() => {
              setShowKomoditas(!showKomoditas);
            }}
          >
            <div className='bg-gray-200 rounded px-4 py-2'>
              <p className='text-green-700'>9</p>
            </div>
            <div className='mx-2 text-gray-600'>
              <p className='text-sm'>Distribusi Benih</p>
              <p className='text-xs'>Berdasarkan Komoditi</p>
            </div>
            <img src={dpDown} alt='dp' className='m-auto ml-2' />
          </div> */}
        </div>
      ) : null}
    </React.Fragment>
  );
}

import React from "react";
import dpDown from "../Assets/dpDown.svg";
// import cengkeh from "../Assets/cengkeh.svg";
// import tea from "../Assets/tea.svg";
// import tree from "../Assets/tree.svg";
// import kopi from "../Assets/coffee.svg";
// import checked from "../Assets/checked.svg";
// import unChecked from "../Assets/unChecked.svg";
import { useQuery } from "urql";
import AppContext from "../Context/AppContext";
import loadingIc from "../Assets/loading.svg";
import MapContext from "../Context/MapContext";

const listTanaman = `query MyQuery($kab:String, $kec:String, $kel:String) {
  disbun_tanaman(distinct_on: tanaman, where: {kecamatan_: {_eq: $kec}, kab_: {_eq: $kab}, desa_1: {_eq: $kel}}) {
    tanaman
  }
}`;

export default function FilterPetaLahan({ isCari }) {
  const { kec, kel, kab } = React.useContext(AppContext);
  const { map } = React.useContext(MapContext);
  const [showKomoditas, setShowKomoditas] = React.useState(false);
  const [listKomo, setListKomo] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [res] = useQuery({
    query: listTanaman,
    variables: { kec: kec, kab: kab, kel: kel },
  });

  React.useEffect(() => {
    if (!res.data) {
      console.log(res.error);
      if (isCari) {
        setLoading(true);
      }
    } else {
      if (res.data.disbun_tanaman.length > 0) {
        setListKomo(res.data.disbun_tanaman);
        setLoading(false);
      }
    }
  }, [res, isCari]);
  const FilterMap = (data) => {
    map.setFilter("tanaman", ["in", "tanaman", data]);
  };

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
          {loading ? (
            <div>
              <img src={loadingIc} alt='loading' className='m-auto' />
            </div>
          ) : (
            <div
              className='flex mt-10'
              onClick={() => {
                setShowKomoditas(!showKomoditas);
              }}
            >
              <div className='bg-gray-200 rounded px-4 py-2'>
                <p className='text-green-700'>{listKomo && listKomo.length}</p>
              </div>
              <button className='flex'>
                <div className='mx-2 text-gray-600'>
                  <p className='text-sm'>Kecocokan Lahan</p>
                  <p className='text-xs'>Berdasarkan Komoditi</p>
                </div>
                <img src={dpDown} alt='dp' className='m-auto ml-2' />
              </button>
            </div>
          )}

          {showKomoditas ? (
            <div className='overflow-auto' style={{ maxHeight: "400px" }}>
              {listKomo.map((list, idx) => (
                <div className='flex justify-between p-2 py-4 mr-2'>
                  {/* <div className='flex'>
                    <img src={list.img} alt={list.name} className='mr-2' />
                    <p className='text-left'>{list.tanaman}</p>
                  </div>
                  <button onClick={() => {}}>
                    <img src={unChecked} alt='semua' />
                  </button> */}
                  <label for={list.tanaman} className='ml-2'>
                    {list.tanaman}
                  </label>
                  <input
                    type='radio'
                    id={list.tanaman}
                    name='tanaman'
                    value={list.tanaman}
                    onChange={(e) => {
                      FilterMap(e.target.value);
                    }}
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </React.Fragment>
  );
}

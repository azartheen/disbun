import React from "react";
import BarChart from "./BarChart";
// import DougnutChart from "./DougnutChart";
import { useQuery } from "urql";

const chart = `query MyQuery {
  kabbandung: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB BANDUNG"}}) {
    aggregate {
      count
    }
  }
  kabbogor: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB BOGOR"}}) {
    aggregate {
      count
    }
  }
  kabbandungbarat: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB BANDUNG BARAT"}}) {
    aggregate {
      count
    }
  }
  kabbekasi: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB BEKASI"}}) {
    aggregate {
      count
    }
  }
  kabciamis: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB CIAMIS"}}) {
    aggregate {
      count
    }
  }
  kabcianjur: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB CIANJUR"}}) {
    aggregate {
      count
    }
  }
  kabcirebon: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB CIREBON"}}) {
    aggregate {
      count
    }
  }
  kabgarut: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB GARUT"}}) {
    aggregate {
      count
    }
  }
  kabindramayu: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB INDRAMAYU"}}) {
    aggregate {
      count
    }
  }
  kabkarawang: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB KARAWANG"}}) {
    aggregate {
      count
    }
  }
  kabkuningan: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB KUNINGAN"}}) {
    aggregate {
      count
    }
  }
  kabmajalengka: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB MAJALENGKA"}}) {
    aggregate {
      count
    }
  }
  kabpangandaran: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB PANGANDARAN"}}) {
    aggregate {
      count
    }
  }
  kabpurwakarta: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB PURWAKARTA"}}) {
    aggregate {
      count
    }
  }
  kabsubang: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB SUBANG"}}) {
    aggregate {
      count
    }
  }
  kabsukabumi: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB SUKABUMI"}}) {
    aggregate {
      count
    }
  }
  kabsumedang: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB SUMEDANG"}}) {
    aggregate {
      count
    }
  }
  kabtasik: disbun_tani_aggregate(where: {kab_kot: {_eq: "KAB TASIKMALAYA"}}) {
    aggregate {
      count
    }
  }
  kotabanjar: disbun_tani_aggregate(where: {kab_kot: {_eq: "KOTA BANJAR"}}) {
    aggregate {
      count
    }
  }
  kotabogor: disbun_tani_aggregate(where: {kab_kot: {_eq: "KOTA BOGOR"}}) {
    aggregate {
      count
    }
  }
  kotatasik: disbun_tani_aggregate(where: {kab_kot: {_eq: "KOTA TASIKMALAYA"}}) {
    aggregate {
      count
    }
  }
}`;

export default function PesebaranData() {
  const [res] = useQuery({
    query: chart,
  });
  const [data, setData] = React.useState();

  React.useEffect(() => {
    if (!res.data) {
      console.log(res.error);
    } else {
      console.log(res.data);
      const dat = res.data;
      const lbl = [
        "Kab Bandung",
        "Kab Bogor",
        "Kab Bandung Barat",
        "Kab Bekasi",
        "Kab Ciamis",
        "Kab Cianjur",
        "Kab Cirebon",
        "Kab Garut",
        "Kab Indramayu",
        "Kab Karawang",
        "Kab Kuningan",
        "Kab Majalengka",
        "Kab Pangandaran",
        "Kab Purwakarta",
        "Kab Subang",
        "Kab Sukabumi",
        "Kab Sumedang",
        "Kab Tasik",
        "Kota Banjar",
        "Kota Bogor",
        "Kota Tasik",
      ];
      const newData = [
        dat.kabbandung.aggregate.count,
        dat.kabbogor.aggregate.count,
        dat.kabbandungbarat.aggregate.count,
        dat.kabbekasi.aggregate.count,
        dat.kabciamis.aggregate.count,
        dat.kabcianjur.aggregate.count,
        dat.kabcirebon.aggregate.count,
        dat.kabgarut.aggregate.count,
        dat.kabindramayu.aggregate.count,
        dat.kabkarawang.aggregate.count,
        dat.kabkuningan.aggregate.count,
        dat.kabmajalengka.aggregate.count,
        dat.kabpangandaran.aggregate.count,
        dat.kabpurwakarta.aggregate.count,
        dat.kabsubang.aggregate.count,
        dat.kabsukabumi.aggregate.count,
        dat.kabsumedang.aggregate.count,
        dat.kabtasik.aggregate.count,
        dat.kotabanjar.aggregate.count,
        dat.kotabogor.aggregate.count,
        dat.kotatasik.aggregate.count,
      ];
      setData({ label: lbl, data: newData });
    }
  }, [res]);

  const [tipeChart, setTipe] = React.useState("tani");
  return (
    <div className='mt-16 flex'>
      <div className='w-1/3'>
        <div>
          <p className='text-lg font-medium'>Persebaran Data</p>
          <p className='text-xs'>Chart</p>
        </div>
        <div className='mt-5 text-sm'>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "tani"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("tani");
              }}
            >
              Kelompok Tani
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "perlindungan"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("perlindungan");
              }}
            >
              Pengembangan dan Perlindungan
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "produksi"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("produksi");
              }}
            >
              Data Produksi
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "Perkebunan"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("Perkebunan");
              }}
            >
              Perlindungan Perkebunan
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "Sertifikasi"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("Sertifikasi");
              }}
            >
              Produksi dan Sertifikasi Benih
            </button>
          </div>
          <div className='m-2'>
            <button
              className={`p-3 ${
                tipeChart === "PPUP"
                  ? "bg-green-100 text-green-600 rounded-lg"
                  : null
              }`}
              onClick={() => {
                setTipe("PPUP");
              }}
            >
              PPUP
            </button>
          </div>
        </div>
      </div>
      <div className='w-2/3'>
        <p className='text-3xl font-medium'>Data Kelompok Tani</p>
        <div className='rounded border p-6 my-8 text-lg'>
          <p className='my-4'>Jumlah Kelompok Tani Per-Kabupaten/Kota </p>
          {data && <BarChart dataBar={data} />}
          <div className='w-full h-1 bg-gray-200 my-16'></div>
          {/* <p className='my-6'>Pembangunan Kelompok Tani</p>
          <DougnutChart /> */}
        </div>
      </div>
    </div>
  );
}

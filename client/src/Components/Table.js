import React from "react";
import icFilter from "../Assets/icFilter.svg";
import icNext from "../Assets/next.svg";
import icPrev from "../Assets/prev.svg";
import searchTable from "../Assets/icSearchTable.svg";
import backgray from "../Assets/backgray.svg";
import { useQuery } from "urql";

const databaseKel = `query MyQuery {
  disbun_tani(limit: 10) {
    nama_kelompok_tani
    kode_kelompok
    komoditas_utama
    kab_kot
    kec
    kel
    latitude
    longitude
  }
}`;
const dataKelembagaan = `query MyQuery {
  disbun_tani(limit: 10) {
    nama_kelompok_tani
    kode_kelompok
    komoditas_utama
    kab_kot
    kec
    kel
    jumlah_total_anggota
    tahun_berdiri
    kelas_kelompok
    sk_pembentukan
    akta_notaris
    ahu
    prestasi_kabupaten
    prestasi_provinsi
    prestasi_nasional
    prestasi_internasional
    nama_koperasi
  }
}`;

const listKolom = [
  {
    name: "Data Base Kelompok",
    head: [
      "Nama Kelompok Tani",
      "Kode Kelompok",
      "Komoditas Utama",
      "Kabupaten/Kota",
      "Kecamatan",
      "Kelurahan/Desa",
      "Posisi Geografis",
    ],
    column: [
      "nama_kelompok_tani",
      "kode_kelompok",
      "komoditas_utama",
      "kab_kot",
      "kec",
      "kel",
      "latitude",
      "longitude",
    ],
    data: databaseKel,
  },
  {
    name: "Kelembagaan Kelompok",
    head: [
      "Nama Kelompok Tani",
      "Kode Kelompok",
      "Komoditas Utama",
      "Kabupaten/Kota",
      "Kecamatan",
      "Kelurahan/Desa",
      "Anggota",
      "Tahun Berdiri",
      "Kelas",
      "Legalitas",
      "Prestasi",
      "Koprasi",
    ],
    column: [
      "nama_kelompok_tani",
      "kode_kelompok",
      "komoditas_utama",
      "kab_kot",
      "kec",
      "kel",
      "jumlah_total_anggota",
      "tahun_berdiri",
      "kelas_kelompok",
      "sk_pembentukan",
      "akta_notaris",
      "ahu",
      "prestasi_kabupaten",
      "prestasi_provinsi",
      "prestasi_nasional",
      "prestasi_internasional",
      "nama_koperasi",
    ],
    data: dataKelembagaan,
  },
];

export default function Table({ jenis }) {
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState([]);
  const handleChangeFilter = (fil) => {};
  const [listColom, setListColom] = React.useState();
  const [bedaData, setBedaData] = React.useState(databaseKel);
  const [res] = useQuery({
    query: bedaData,
  });

  React.useEffect(() => {
    if (!res.data) {
      console.log(res.error);
    } else {
      setData(res.data.disbun_tani);
    }
  }, [res]);

  React.useEffect(() => {
    const ind = listKolom.filter((prev) => prev.name === jenis);
    if (ind.length !== 0) {
      setListColom(ind[0]);
      setBedaData(ind[0].data);
    }
  }, [jenis]);
  return (
    <div className='text-gray-700 mx-20 rounded shadow'>
      <div className='table-fixed mb-16 m-6'>
        <div className='overflow-auto'>
          <div className='overflow-auto'>
            <table className='table-auto w-full mb-6 mt-5'>
              <thead className='text-sm text-left'>
                <tr>
                  {listColom &&
                    listColom.head.map((data) => (
                      <td className='py-2'>
                        <button
                          className='ml-5 flex'
                          onClick={() => {
                            handleChangeFilter("tahun");
                          }}
                        >
                          {data}
                          <img
                            src={icFilter}
                            alt='filter'
                            className='px-2 m-auto'
                          />
                        </button>
                      </td>
                    ))}
                </tr>
              </thead>
              <tbody>
                {data &&
                  data.map((data, idx) => (
                    <tr
                      className={`text-left text-xs ${
                        (idx + 1) % 2 === 0 ? "bg-white" : "bg-green-100"
                      }`}
                      key={data.nama_kec + idx}
                    >
                      {listColom &&
                        listColom.column.map((col) => (
                          <td key={col} className=' p-3'>
                            {data[col]}
                          </td>
                        ))}
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          {data.length === 0 ? (
            <div className='text-center p-10 m-auto'>
              <img src={searchTable} alt='searc' className='m-auto my-5' />
              <p>Lakukan Pencarian Data Untuk Menampilkan Tabel</p>
            </div>
          ) : null}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "25px",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <p>menampilkan</p>
              <select
                id='page-size'
                style={{ minWidth: "50px", margin: "0px 20px" }}
                value={pageSize}
                className='border p-1 rounded'
                onChange={(e) => setPageSize(e.target.value)}
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
              <p>dari {total} baris</p>
            </div>
            <div className='flex'>
              <button
                onClick={() => setPages((prev) => prev - 1)}
                className={`border rounded-full px-3 py-2 mr-2 ${
                  pages === 1 ? "border-gray-300" : "border-green-600"
                }`}
                disabled={pages === 1}
              >
                <div
                  className={`flex ${
                    pages === 1 ? "text-gray-300" : "text-green-600"
                  }`}
                >
                  <img
                    src={pages === 1 ? backgray : icPrev}
                    alt='next'
                    className='mr-2'
                  />
                  <p>prev</p>
                </div>
              </button>

              {pages !== 1 && (
                <button
                  onClick={() => setPages(1)}
                  variant='outlined'
                  style={{
                    borderRadius: "0",
                    minWidth: "40px",
                    height: "40px",
                    borderRight: "none",
                    borderLeft: "none",
                  }}
                >
                  ...
                </button>
              )}

              {[pages * 4 - 3, pages * 4 - 2, pages * 4 - 1, pages * 4 - 0].map(
                (el) => (
                  <button
                    key={el}
                    onClick={() => setPage(el)}
                    variant='outlined'
                    style={
                      page === el
                        ? Object.assign(
                            {
                              borderRadius: "30px",
                              minWidth: "35px",
                              height: "35px",
                            },
                            { background: "#27AE60", color: "white" }
                          )
                        : {
                            borderRadius: "0",
                            minWidth: "35px",
                            height: "35px",
                          }
                    }
                  >
                    {el}
                  </button>
                )
              )}

              {/* {pages !== Math.ceil(total / (4 * pageSize)) && (
            <button
              onClick={() => setPages(Math.ceil(total / (4 * pageSize)))}
              variant="outlined"
              style={{
                borderRadius: "0",
                minWidth: "40px",
                height: "40px",
                borderRight: "none",
                borderLeft: "none",
              }}
            >
              ...
            </button>
          )} */}

              <button
                onClick={() => setPages((prev) => prev + 1)}
                variant='outlined'
                className='border border-green-600 rounded-full px-3 py-2'
              >
                <div className='flex text-green-600'>
                  next
                  <img src={icNext} alt='next' className='ml-2' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

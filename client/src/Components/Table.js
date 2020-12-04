import React from "react";
import icFilter from "../Assets/icFilter.svg";
import icNext from "../Assets/next.svg";
import icPrev from "../Assets/prev.svg";
import searchTable from "../Assets/icSearchTable.svg";

import backgray from "../Assets/backgray.svg";

const dataKelompok = [
  "Nama Kelompok Tani",
  "Kode Kelompok",
  "Komoditas Utama",
  "Kabupaten/Kota",
  "Kecamatan",
  "Kelurahan/Desa",
  "Posisi Geografis",
];
export default function Table() {
  const [pageSize, setPageSize] = React.useState(10);
  const [page, setPage] = React.useState(1);
  const [pages, setPages] = React.useState(1);
  const [total, setTotal] = React.useState(0);
  const [data, setData] = React.useState([]);
  const [desc, setDesc] = React.useState("");
  const [nameCol, setNameCol] = React.useState();
  const [isSeparator, setSeparator] = React.useState(false);
  const handleChangeFilter = (fil) => {};
  return (
    <div className='text-gray-700 mx-20 rounded shadow'>
      <div className='table-fixed mb-16 m-6'>
        <div className='overflow-auto'>
          <div className='overflow-auto'>
            <table className='table-auto w-full mb-6 mt-5'>
              <thead className='text-sm text-left'>
                <tr>
                  <td className='py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("tahun");
                      }}
                    >
                      Nama Kelompok Tani
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>
                  </td>
                  <td className='py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("id_kabupaten");
                      }}
                    >
                      Kode Kelompok
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>
                  </td>
                  <td className='py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("id_kecamatan");
                      }}
                    >
                      Komoditas Utama
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>
                  </td>
                  <td className='py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("desa.id_desa");
                      }}
                    >
                      Kabupaten/Kota
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>
                  </td>
                  <td className='py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("iks");
                      }}
                    >
                      Kecamatan
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>{" "}
                  </td>
                  <td className=' py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("ike");
                      }}
                    >
                      Kelurahan/Desa
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>
                  </td>
                  <td className='py-2'>
                    <button
                      className='ml-5 flex'
                      onClick={() => {
                        handleChangeFilter("ikl");
                      }}
                    >
                      Posisi Geografis
                      <img
                        src={icFilter}
                        alt='filter'
                        className='px-2 m-auto'
                      />
                    </button>
                  </td>
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
                      {/* <td className='p-3'>{data.tahun}</td>
                        <td className='p-3'>{data.nama_kab}</td>
                        <td className=' p-3'>{data.nama_kec}</td>
                        <td className=' p-3'>{data.nama_des}</td>
                        <td className=' p-3'>{data.iks.toFixed(4)} </td>
                        <td className=' p-3'>{data.ike.toFixed(4)} </td>
                        <td className=' p-3'>{data.ikl.toFixed(4)} </td>
                        <td className=' p-3'>{data.avg_idm} </td>
                        <td className=' p-3'>{data.status_idm} </td>
                        {isSeparator ? (
                          <td className=' p-3'>
                            Rp. {parseInt(data.datanya).toLocaleString()}
                          </td>
                        ) : (
                          <td className=' p-3'>{data.datanya} </td>
                        )} */}
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
                className={`border  rounded-full px-3 py-2 mr-2 ${
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

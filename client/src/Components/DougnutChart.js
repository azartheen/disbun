import React from "react";
import Chart from "chart.js";

export default function DougnutChart({ dataPie }) {
  const chartRef = React.useRef(null);
  React.useEffect(() => {
    new Chart(chartRef.current, {
      type: "doughnut",
      data: {
        labels: [
          "Usulan Teknis Perencanaan",
          "Pelaksanaan Perencanaan",
          "Pelaksanaan Konstruksi",
          "Usulan Konstruksi",
          "Konstruksi Terbangun",
        ],
        datasets: [
          {
            data: [12, 19, 3, 5],
            // data: dataPie,
            backgroundColor: [
              "#505050",
              "#009D57",
              "#17643A",
              "#FFD039",
              "#B6B4A7",
            ],
            borderColor: [
              "#505050",
              "#009D57",
              "#17643A",
              "#FFD039",
              "#B6B4A7",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
        //       },
        //     },
        //   ],
        // },
      },
    });
  }, [dataPie]);
  return (
    <div className='flex mx-4'>
      <div className='w-1/2'>
        <canvas ref={chartRef} width='50%' height='50%'></canvas>
      </div>
      <div className='text-xs mt-10 m-auto ml-10 w-1/2'>
        <div className='flex'>
          <div
            style={{ backgroundColor: "#505050" }}
            className='h-5 w-5 rounded-full'
          ></div>
          <div className='ml-2 flex'>
            <p>Usulan Teknis Perencanaan</p>
            <p style={{ color: "#505050" }} className='ml-3'>
              10
            </p>
          </div>
        </div>
        <div className='flex mt-5'>
          <div
            style={{ backgroundColor: "#009D57" }}
            className='h-5 w-5 rounded-full'
          ></div>
          <div className='ml-2 flex'>
            <p>Pelaksanaan Perencanaan</p>
            <p style={{ color: "#009D57" }} className='ml-3'>
              10
            </p>
          </div>
        </div>
        <div className='flex mt-5'>
          <div
            style={{ backgroundColor: "#17643A" }}
            className='h-5 w-5 rounded-full'
          ></div>
          <div className='ml-2 flex'>
            <p>Pelaksanaan Konstruksi</p>
            <p style={{ color: "#17643A" }} className='ml-3'>
              10
            </p>
          </div>
        </div>
        <div className='flex mt-5'>
          <div
            style={{ backgroundColor: "#FFD039" }}
            className='h-5 w-5 rounded-full'
          ></div>
          <div className='ml-2 flex'>
            <p>Usulan Konstruksi</p>
            <p style={{ color: "#FFD039" }} className='ml-3'>
              10
            </p>
          </div>
        </div>
        <div className='flex mt-5'>
          <div
            style={{ backgroundColor: "#B6B4A7" }}
            className='h-5 w-5 rounded-full'
          ></div>
          <div className='ml-2 flex'>
            <p>Konstruksi Terbangun</p>
            <p style={{ color: "#B6B4A7" }} className='ml-3'>
              10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

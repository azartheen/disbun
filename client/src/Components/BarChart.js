import React from "react";
import Chart from "chart.js";

export default function BarChart({ dataBar }) {
  const chartRef = React.useRef(null);
  React.useEffect(() => {
    new Chart(chartRef.current, {
      type: "horizontalBar",
      data: {
        labels: ["bandung", "banjar", "tasik", "Subang", "majalengka", "Garut"],
        datasets: [
          {
            label: "jumlah",
            data: [12, 19, 3, 12, 19, 3],
            // data: dataBar,
            backgroundColor: "#009D57",
            borderColor: "#009D57",
            borderWidth: 1,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, [chartRef, dataBar]);
  return (
    <div>
      <canvas ref={chartRef} width='100%' height='80%'></canvas>
    </div>
  );
}

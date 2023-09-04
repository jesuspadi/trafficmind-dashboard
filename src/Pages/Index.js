import React, { useEffect, useState } from 'react';
import ReactApexChart from 'react-apexcharts';

export const Index = () => {
  const initialChartData = {
    series: [
      {
        name: 'Tráfico Anterior',
        data: [50, 60, 55, 70, 69, 80, 90, 111, 145, 170, 160, 150],
      },
      {
        name: 'Tráfico Actual',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 150, 140, 130],
      },
    ],
    options: {
      chart: {
        type: 'area',
        height: 350,
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ],
      },
      legend: {
        position: 'bottom',
      },
    },
  };

  const chart2Data = {
    series: [
      {
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
      },
      xaxis: {
        categories: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
      },
    },
  };

  const chart3Data = {
    series: [44, 55, 13],
    options: {
      chart: {
        type: 'pie',
        height: 350,
      },
      labels: ['Manzanas', 'Plátanos', 'Uvas'],
    },
  };

  const chart4Data = {
    series: [
      {
        data: [10, 20, 30, 40, 50],
      },
    ],
    options: {
      chart: {
        type: 'line',
        height: 350,
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      },
    },
  };

  const [chartData, setChartData] = useState(initialChartData);
  const [chart2, setChart2] = useState(chart2Data);
  const [chart4, setChart4] = useState(chart4Data);

  useEffect(() => {
    const interval = setInterval(() => {
      // Simula actualizaciones de datos en tiempo real
      const newTrafficAnterior = [...chartData.series[0].data];
      const newTrafficActual = [...chartData.series[1].data];

      // Agrega 1 número más al último registro en cada serie de la primera gráfica
      newTrafficAnterior[newTrafficAnterior.length - 1] += 1;
      newTrafficActual[newTrafficActual.length - 1] += 1;

      const newChartData = {
        ...chartData,
        series: [
          { ...chartData.series[0], data: newTrafficAnterior },
          { ...chartData.series[1], data: newTrafficActual },
        ],
      };

      setChartData(newChartData);

      // Agrega 1 número más al último registro en la serie de la segunda gráfica
      const newChart2Data = {
        ...chart2,
        series: [
          {
            data: chart2.series[0].data.map((value, index) =>
              index === chart2.series[0].data.length - 1 ? value + 1 : value
            ),
          },
        ],
      };
      setChart2(newChart2Data);

      // Agrega 1 número más al último registro en la serie de la cuarta gráfica
      const newChart4Data = {
        ...chart4,
        series: [
          {
            data: chart4.series[0].data.map((value, index) =>
              index === chart4.series[0].data.length - 1 ? value + 1 : value
            ),
          },
        ],
      };
      setChart4(newChart4Data);
    }, 2000); // Actualiza cada 2 segundos

    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
  }, [chartData, chart2, chart4]);

  return (
    <div className="container-index">
      <div className="row">
        <div className="col-md-6">
          <div className="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="area" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart">
            <ReactApexChart options={chart2.options} series={chart2.series} type="bar" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart">
            <ReactApexChart options={chart3Data.options} series={chart3Data.series} type="pie" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="chart">
            <ReactApexChart options={chart4.options} series={chart4.series} type="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

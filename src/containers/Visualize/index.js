import React, { useState, useEffect } from "react";
import { Sidebar } from "../../components";
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import data from '../../assets/data/energy.json';
import Header from "../../components/Layouts/AppHeader";

Chart.register(...registerables);

function Visualize() {
  const [chartData, setChartData] = useState({ datasets: [] });

  useEffect(() => {
    const prepareData = (data) => {
      const consumptionData = data.consumption.map(({ time, value }) => ({ x: time, y: value }));
      const temperatureData = data.temperature.map(({ time, value }) => ({ x: time, y: value }));

      return {
        datasets: [
          {
            type: 'line',
            label: 'Temperature (°C)',
            data: temperatureData,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            yAxisID: 'temperature',
          },
          {
            type: 'bar',
            label: 'Energy Consumption (kWh)',
            data: consumptionData,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            yAxisID: 'consumption',
          },
        ],
      };
    };

    setChartData(prepareData(data));
  }, []);

  const chartOptions = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        title: {
          display: true,
          text: 'Time of Day (minutes from midnight)',
        },
        ticks: {
          callback: (value) => {
            const hours = Math.floor(value / 60);
            const minutes = value % 60;
            return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
          },
        },
      },
      consumption: {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Energy Consumption (kWh)',
        },
      },
      temperature: {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };

  return (
    <div className="app-container app-theme-white body-tabs-shadow fixed-header fixed-sidebar">
     <Header/>
      <div className="app-main">
        <Sidebar />
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div className="page-title-icon">
                    <i className="pe-7s-bandaid icon-gradient bg-amy-crisp"></i>
                  </div>
                  <div>Energy Usage and Temperature
                    <div className="page-title-subheading">Visualize your energy consumption and room temperatures.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-content">
              <div className="row">
                <div className="col-md-10">
                  <div className="main-card mb-3 card">
                    <div className="card-body">
                      <h5 className="card-title">Energy Consumption and Temperature</h5>
                      <div className="chart-container">
                        <Bar data={chartData} options={chartOptions} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app-drawer-overlay d-none animated fadeIn"></div>
    </div>
  );
}

export default Visualize;
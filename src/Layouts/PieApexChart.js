import ReactApexChart from 'react-apexcharts';

const state = {
  series: [44, 55, 41, 17, 15],
  options: {
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  },
};

const PieApexChart = () => {
  return (
    <div className='chart w-1/3'>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type='donut'
      />
    </div>
  );
};

export default PieApexChart;

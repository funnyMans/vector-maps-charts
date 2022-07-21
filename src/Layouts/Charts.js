import React from 'react';
import AreaApexChart from './AreaApexChart';
import PieApexChart from './PieApexChart';
import WorldMap from './WorldMap';

const Charts = () => {
  return (
    <div className='flex bg-gray-800'>
      <AreaApexChart />
      <PieApexChart />
      <WorldMap />
    </div>
  );
};

export default Charts;

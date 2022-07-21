import React from 'react';
import AddToFavorites from '../Layouts/AddToFavorites';
import Charts from '../Layouts/Charts';
import Records from '../Layouts/Records';
import Stats from '../Layouts/Stats';

const Dashboard = () => {
  return (
    <div>
      <AddToFavorites />
      <Stats />
      <Charts />
      <Records />
    </div>
  );
};

export default Dashboard;

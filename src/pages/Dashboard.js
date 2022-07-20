import React from "react";
import AddToFavorites from "../Layouts/AddToFavorites";
import Charts from "../Layouts/Charts";
import Stats from "../Layouts/Stats";

const Dashboard = () => {
  return (
    <div>
      <AddToFavorites />
      <Stats />
      <Charts />
    </div>
  );
};

export default Dashboard;

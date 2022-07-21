import React, { useState, useEffect, useRef } from 'react';
import jsVectorMap from 'jsvectormap';
import 'jsvectormap/dist/maps/world-merc';
import 'jsvectormap/dist/css/jsvectormap.css';

const WorldMap = () => {
  const map = useRef(null);
  useEffect(() => {
    if (!map.current) {
      map.current = new jsVectorMap({
        selector: '.worldMap',
        map: 'world_merc',
      });
    }
  }, []);
  return (
    <div className='w-1/3'>
      <div className='worldMap'></div>
    </div>
  );
};

export default WorldMap;

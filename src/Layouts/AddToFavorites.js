import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const AddToFavorites = () => {
  return (
    <div className='bg-white shadow '>
      <div className='flex justify-between items-center bg-gray-200 mx-auto '>
        <h1 className='text-xl  text-gray-500'>Dashboard</h1>
        <div className='flex items-center p-2 bg-gray-300'>
          <AiFillHeart color='grey' className='mr-2' />
          <span>ADD THIS PAGE TO FAVORITES</span>
        </div>
      </div>
    </div>
  );
};

export default AddToFavorites;

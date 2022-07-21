import React from 'react';

import { columns, data } from '../data/tableData';
import DataTable from '../components/DataTable';

const tableData = ['a', 'b', 'c'];
const Records = () => {
  return (
    <div className='flex'>
      {tableData.map((info, idx) => (
        <div className='w-1/3' key={idx}>
          <DataTable columns={columns} data={data} />
        </div>
      ))}
    </div>
  );
};

export default Records;

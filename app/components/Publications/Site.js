import React from 'react';

import Table from './Table';
import data from '../../data/github';

const Stats = () => (
  <div>
    <h3>Publications</h3>
    <Table
      data={data}
    />
  </div>
);

export default Stats;

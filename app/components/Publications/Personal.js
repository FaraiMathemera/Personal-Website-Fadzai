import React, { useState, useEffect } from 'react';

import Table from './Table';
import personalData from '../../data/publications';

const PersonalStats = () => {
  const [data] = useState(personalData);

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    const birthTime = new Date('1990-02-05T09:24:00');
    setData({
      ...data,

    });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => { clearInterval(timer); };
  }, []);

  return (
    <>
      <h3>Contributions</h3>
      <Table data={Object.keys(data).map((key) => data[key])} />
    </>
  );
};

export default PersonalStats;

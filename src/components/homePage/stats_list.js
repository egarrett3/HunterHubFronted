import React from 'react'
import StatsUnit from './stats_unit';

const StatsList = ({ list }) => (
  <>
    {list.map((ele, idx) => (
      <StatsUnit 
        key={ele[0]} 
        field={ele[0]} 
        value={ele[1]} />
    ))}
  </>
);

export default StatsList;

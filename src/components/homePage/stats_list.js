import React from 'react'
import StatsUnit from './stats_unit';

function StatsList({list}) {
    return (
      <div className="stats-list">
        {list.map((ele) => (
          <StatsUnit key={ele[0]} field={ele[0]} value={ele[1]} />
        ))}
      </div>
    );
}

export default StatsList;

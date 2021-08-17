import React from 'react';

const NA = 'no record'

const StatsUnit = ({field, value}) => {
    return (
      <>
        <div className="stats-unit">
          <span >{field}:&nbsp;</span>
          <span >{value || NA}</span>
        </div>
      </>
    );

}

export default StatsUnit;
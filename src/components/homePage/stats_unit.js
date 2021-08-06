import React from 'react';

const NA = 'no value recorded'

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
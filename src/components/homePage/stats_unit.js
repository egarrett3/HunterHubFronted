import React from 'react';

const NA = 'Unrecorded'

const StatsUnit = ({field, value}) => {
debugger
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
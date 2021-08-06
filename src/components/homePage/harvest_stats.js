import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from "lodash/isEmpty";
import StatsUnit from './stats_unit';

const HarvestStats = ({}) => {

  const [harvestData] = useSelector((state) => {
    if (!isEmpty(state.harvestData)) {
      let unitArr = []
      unitArr.push(state.harvestData[0]);
      return unitArr;
    } else {
      return [];
    }
  });

  const formatHarvestData = () => (
    <div className="stats-presentation">
      <div className="stats-list">
        {harvestData.map((ele) => {
          return <StatsUnit key={ele[0]} field={ele[0]} value={ele[1]} />;
        })}
      </div>
    </div>
  );

  useEffect(() => {
    formatHarvestData()
  },[harvestData])

  return (
    <div className="stats-presentation">
      {formatHarvestData()}
    </div>
  );
}

export default HarvestStats;
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from "lodash/isEmpty";
import StatsList from './stats_list';


const HarvestStats = ({animal}) => {
    const filterUnit = (harvestData = [], unit = "1") => {
      let unitArr = [];
    
      for (let i in harvestData) {
        harvestData[i].forEach((element) => {
          if (element[0] === "Unit" && element[1] === unit) {
            unitArr.push(harvestData[i]);
          }
        });
      }
      return unitArr;
    };

  const currentUnit = useSelector((state) => {
    if (isEmpty(state.unit.defaultSearch)) {
      return '1'
    } else {
      return state.unit.defaultSearch;
    }
  })

  const harvestData = useSelector((state) => {
    const animalStats = state.harvestData.animalStats;
    if (!isEmpty(animalStats)) {
      const filteredData = filterUnit(animalStats, currentUnit);
      return (filteredData);
    } else {
      return [];
    }
  });
  
  const formatHarvestData = () => (
    <div className="stats-presentation">
      {harvestData.map((ele, idx) => (
        <StatsList key={`list-${idx}`} list={ele} />
      ))}
    </div>
  );
  
  useEffect(() => {
    formatHarvestData()
  },[currentUnit,animal])

  return (
    <>
      {formatHarvestData()}
    </>
  );
}

export default HarvestStats;
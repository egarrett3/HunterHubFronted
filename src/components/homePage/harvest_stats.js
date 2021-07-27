import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from "lodash/isEmpty";
import RenderList from './render_list';

const HarvestStats = ({}) => {

  const harvestData = useSelector((state) => {
    debugger
    if (!isEmpty(state.harvestData)) {
      let unitArr = []
      for (let i = 0; i < state.harvestData.length; i++) {
        state.harvestData[i].forEach((element) => {
          if ((element[0] === "Unit" && element[1] === "1") || 
              (element[0] === "Area" && element[1] === "1-1")) {
            unitArr.push(state.harvestData[i]);
          }
        });
      }
      debugger
      return unitArr;
    } else {
      return [];
    }
  });

  const formatHarvestData = () => {
    
    return (
      <>
        {harvestData.map((element) => {
        
        return (
          <>
            <div className='stats-list'>

              {element.map((ele,idx) => {
                return (
                  <div className="stats-unit" key={idx}>
                    <span>{ele[0]}:&nbsp;</span>
                    <span>{ele[1]}</span>
                  </div>
                );
              })}

            </div>
          </>
        )

      })}
      </>
    )
  }

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
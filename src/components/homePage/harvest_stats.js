import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import isEmpty from "lodash/isEmpty";
import RenderList from './render_list';

const HarvestStats = ({}) => {

    const harvestData = useSelector((state) => {
      if (!isEmpty(state.harvestData)) {
        return state.harvestData;
      } else {
        return [];
      }
    });

    const formatHarvestData = () => {
      debugger
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
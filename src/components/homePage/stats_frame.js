import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStats, fetchOptions } from "../../actions/harvest_stats_actions";
import StatsOptions from './stats_options';
import HarvestStats from './harvest_stats'
import setStatsFilter from '../../actions/harvest_stats_actions';

const StatsFrame = () => {
  const animalObj = useSelector((state) => {
    return state.HarvestHeaders
  })

  const animals = Object.keys(animalObj);
  const yrs = Object.values(animalObj[animals[0]]);
  const seasn = Object.keys(animalObj[animals[0]]);

  const [years, setYears] = useState(yrs);
  const [seasons, setSeasons] = useState(seasn);

  const [payload, setPayload] = useState({
    animal: animals[0],
    year: yrs[0][0],
    season: seasn[0],
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOptions())
  },[]);

  useEffect(() => {
    dispatch(fetchStats(payload));
  }, [payload]);

  return (
    <div className="harvest-stats-container">
      <StatsOptions 
        animalObj={animalObj}
        setPayload={setPayload} 
        setYears={setYears}
        setSeasons={setSeasons}
        animals={animals} 
        years={years} 
        seasons={seasons}
      />
      <HarvestStats />
    </div>
  )
}

// const animals = ['bear','lion']
// const seasons = ['general','controlled']
// const years = ['2010','2011']
export default StatsFrame;
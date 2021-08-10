import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStats, fetchOptions } from "../../actions/harvest_stats_actions";
import StatsOptions from './stats_options';
import HarvestStats from './harvest_stats'
import setStatsFilter from '../../actions/harvest_stats_actions';

const StatsFrame = ({season}) => {
  const animalObj = useSelector((state) => {
    return state.HarvestHeaders
  })

  const animals = Object.keys(animalObj);
  const yrs = Object.values(animalObj[animals[0]]);
  let animalList = [];

  if (season === "controlled") {
    animalList = animals.filter(
      (animal) => animalObj[animal]["controlled"].length !== 0
    );
  } else if (season === "general") {
    animalList = animals.filter(
      (animal) => animalObj[animal]["general"].length !== 0
    );
  }
  // const season = Object.keys(animalObj[animals[0]]);

  const [years, setYears] = useState(yrs);
  // const [seasons, setSeasons] = useState(season);

  const [payload, setPayload] = useState({
    animal: animals[0],
    year: yrs[0][0],
    season: season,
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOptions())
  },[]);

  useEffect(() => {
    dispatch(fetchStats(payload));
  }, [payload.year,payload.season]);

  return (
    <div className="harvest-stats-container">
      <StatsOptions 
        animalObj={animalObj}
        setPayload={setPayload} 
        setYears={setYears}
        // setSeasons={setSeasons}
        animals={animalList} 
        years={years} 
        season={season}
      />
      <HarvestStats />
    </div>
  )
}

// const animals = ['bear','lion']
// const seasons = ['general','controlled']
// const years = ['2010','2011']
export default StatsFrame;
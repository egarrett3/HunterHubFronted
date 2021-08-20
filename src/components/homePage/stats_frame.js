import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchStats } from "../../actions/harvest_stats_actions";
import StatsOptions from './stats_options';
import HarvestStats from './harvest_stats'
import MapInvalidAreaMsg from './mapInvalidAreaMsg';

const StatsFrame = ({season,zone,animalObj}) => {
  const dispatch = useDispatch();

  let animalList = [];

  const animals = Object.keys(animalObj);
  const yrs = Object.values(animalObj[animals[0]]);

  if (season === "controlled") {
    animalList = animals.filter(
      (animal) => animalObj[animal]["controlled"].length !== 0
    );
  } else if (season === "general") {
    animalList = animals.filter(
      (animal) => animalObj[animal]["general"].length !== 0
    );
  }
  
  const [years, setYears] = useState(yrs);

  const [payload, setPayload] = useState({
    animal: animals[0],
    year: yrs[0][0],
    season: season,
  });
  
  // useEffect(() => {
  //   dispatch(fetchOptions())
  // },[]);

  useEffect(() => {
    dispatch(fetchStats(payload));
  }, [payload.year,payload.season,payload.animal]);

  return (
    <div className="harvest-stats-container">
      <StatsOptions 
        animalObj={animalObj}
        setPayload={setPayload} 
        setYears={setYears}
        animals={animalList} 
        years={years} 
        season={season}
      />
      {zone 
        ? <MapInvalidAreaMsg animal={payload.animal} zone={zone} season={season}/>
        : <HarvestStats animal={payload.animal}/> }
    </div>
  )
}

export default StatsFrame;
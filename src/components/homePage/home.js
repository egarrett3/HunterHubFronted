import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchOptions } from "../../actions/harvest_stats_actions";
import StatsFrame from './stats_frame';
import MyMap from './map';
import '../../stylesheet/home_page.css';
import _ from 'lodash';

const Home = () => {

  const dispatch = useDispatch();

  const zone = useSelector((state) => {
    return state.unit.invalidUnit ? state.unit.invalidUnit : "";
  });

  const areas = useSelector((state) => {
    return state.harvestData.huntableAreas
      ? state.harvestData.huntableAreas
      : new Set();
  });

  const animalObj = useSelector((state) => {
    return state.HarvestHeaders ? state.HarvestHeaders : {};
  })

  useEffect(() => {
    dispatch(fetchOptions());
  }, []);

  return (
    <>
      <MyMap areas={areas}/>
      {(!_.isEmpty(animalObj)) 
        ? <StatsFrame season={"general"} zone={zone} animalObj={animalObj}/>
        : <></>
      }
    </>
  );
}

export default Home;
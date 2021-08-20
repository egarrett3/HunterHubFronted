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
    debugger
    return state.unit.invalidUnit ? state.unit.invalidUnit : "";
  });
  
  const areas = useSelector((state) => {
    debugger
    return state.harvestData.huntableAreas
      ? Object.values(state.harvestData.huntableAreas)
      : [];
  });

  const animalObj = useSelector((state) => {
    return state.HarvestHeaders ? state.HarvestHeaders : {};
  })

  useEffect(() => {
    dispatch(fetchOptions());
  }, []);

  return (
    <div className="container">
      {!_.isEmpty(areas) ? (
        <MyMap areas={areas}/>
      ) : (
        <></>
      )}
      {!_.isEmpty(animalObj) ? (
        <StatsFrame season={"general"} zone={zone} animalObj={animalObj} />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Home;
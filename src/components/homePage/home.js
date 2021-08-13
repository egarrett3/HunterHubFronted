import React from 'react';
import { useSelector } from 'react-redux';
import StatsFrame from './stats_frame';
import MyMap from './map';
import '../../stylesheet/home_page.css';

const Home = () => {

  const huntableAreas = useSelector((state) => {
    return state.harvestData.huntableAreas
      ? state.harvestData.huntableAreas
      : new Set();
  });

  return (
    <>
      <MyMap areas={huntableAreas}/>
      <StatsFrame season={"general"} />
    </>
  );
}

export default Home;
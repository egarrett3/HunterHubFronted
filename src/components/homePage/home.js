import React from 'react';
import StatsFrame from './stats_frame';
import MyMap from './map';
import '../../stylesheet/home_page.css';

const Home = () => {

    return (
      <>
        <MyMap />
        <StatsFrame season={"general"} />
      </>
    );
}

export default Home;
import React from 'react';
import StatsFrame from './stats_frame';
import Map from './map';
import '../../stylesheet/home_page.css';

const Home = () => {

    return (
        <>
            <Map />
            <StatsFrame season={'general'}/>
        </>
    )
}

export default Home;
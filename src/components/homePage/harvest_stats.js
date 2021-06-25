import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStats } from '../../actions/harvest_stats_actions';

const HarvestStatistics = ({}) => {
    const [animal,setAnimal] = useState();
    const [year,setYear] = useState();
    const [season,setSeason] = useState();

    const dispatch = useDispatch();

    const harvestData = useSelector((state) => {
        return state.harvestData
    });

    const fetchHarvestStats = (e) => {
        e.preventDefault();
        const payload = {
            animal: animal,
            year: year,
            season: season
        }
        dispatch(fetchStats(payload))
    }

    return (
        <>
            <span>HarvestPage</span>
            <div onClick={(e) => setAnimal(e.target.value)}>Elk</div>
            <div onClick={(e) => setSeason(e.target.value)}>2018</div>
            <div onClick={(e) => setYear(e.target.value)}>general</div>
            <div onClick={() => fetchHarvestStats}>{harvestData}</div>
        </>
    )
}

export default HarvestStatistics;
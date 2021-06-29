import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchStats } from '../../actions/harvest_stats_actions';
import isEmpty from 'lodash/isEmpty';

const HarvestStatistics = ({}) => {
    const [animal,setAnimal] = useState('');
    const [year,setYear] = useState('');
    const [season,setSeason] = useState('');

    const dispatch = useDispatch();

    const harvestData = useSelector((state) => {
        if (!isEmpty(state.harvestData)) {
            return state.harvestData
        } else {
            return [];
        }
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
            <div onClick={(e) => setAnimal(e.target.innerText)}>Elk</div>
            <div onClick={(e) => setSeason(e.target.innerText)}>general</div>
            <div onClick={(e) => setYear(e.target.innerText)}>2018</div>
            <div onClick={(e) => fetchHarvestStats(e)}>click here to grab data</div>
            {/* <div>{harvestData}</div> */}
        </>
    )
}

export default HarvestStatistics;
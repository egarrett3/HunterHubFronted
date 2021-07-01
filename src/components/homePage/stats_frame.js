import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { fetchStats } from "../../actions/harvest_stats_actions";
import StatsOptions from './stats_options';
import HarvestStats from './harvest_stats'

const StatsFrame = () => {
    const [payload, setPayload] = useState({
      animal: "deer",
      year: "2019",
      season: "general",
    });

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchStats(payload));
    }, [payload]);

    return (
        <div className="harvest-stats-container">
            <StatsOptions setPayload={setPayload}/>
            <HarvestStats />
        </div>
    )
}

export default StatsFrame;
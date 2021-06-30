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
      <div className="harvest-stats-container">
          <div className='options-container'>
            <div className="search-options">
            <div className="harvest-criteria">Animal
                <div className='dropdown'>
                    <div>Elk</div>
                    <div>Sheep</div>
                    <div>Deer</div>
                    <div>Moose</div>
                    <div>Bear</div>
                    <div>Wolf</div>
                    <div>Pronghorn</div>
                    <div>Lion</div>
                    <div>Turkey</div>
                    <div>Goat</div>
                </div>
            </div>
            <div className="harvest-criteria">Year
                <div className='dropdown'>
                    <div>2019</div>
                    <div>2018</div>
                    <div>2017</div>
                    <div>2016</div>
                    <div>2015</div>
                    <div>2014</div>
                    <div>2013</div>
                    <div>2012</div>
                    <div>2011</div>
                    <div>2010</div>
                </div>
            </div>
            <div className="harvest-criteria">Method
                <div className='dropdown'>
                    <div>General</div>
                    <div>All Weapons Combined</div>
                    <div>Any Weapon</div>
                    <div>Archery</div>
                    <div>Muzzleloader</div>
                </div>
            </div>

          </div>
        </div>
        <div className="stats-presentation"></div>
      </div>
    );
}

export default HarvestStatistics;
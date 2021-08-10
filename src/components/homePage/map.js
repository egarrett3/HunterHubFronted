import React from 'react';
import { useDispatch } from 'react-redux';
import { getUnitMap } from '../../actions/map_actions';

const Map = ({}) => {

    const dispatch = useDispatch();

    return (
        <div className='map-container'> 
            <div onClick={() => dispatch(getUnitMap())}>RETREIVE MAP DATA</div>
        </div>
    )
}

export default Map;
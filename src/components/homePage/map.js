import React, { useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { getUnitMap } from '../../actions/map_actions';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from '../../assets/data/mapData.json';

const MyMap = ({}) => {

    const dispatch = useDispatch();

    return (
      <div className="map-container">
        <div onClick={() => dispatch(getUnitMap())}>RETREIVE MAP DATA</div>
          <MapContainer 
            style={{ height: "80vh", width: "80wh"}}
            zoom={6}
            center={[45.5,-114.4]}
          >
              <GeoJSON data={mapData.features}/>
          </MapContainer>
      </div>
    );
}

export default MyMap;
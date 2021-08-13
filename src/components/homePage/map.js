import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from '../../assets/data/mapData.json';
import { receiveUnit } from '../../actions/map_actions';
import _ from 'lodash';
import '../../stylesheet/map.css';
import { RECEIVE_OPTIONS } from '../../actions/harvest_stats_actions';

const MyMap = ({areas}) => {

    const dispatch = useDispatch();

    const getColor = (unit) => {
      console.log(areas)
      if (!_.isEmpty(areas) && areas.has(unit.properties.NAME)) {
        return "#bce4e8";
      } else {
        return "#d10000";
      }
    }

    function style(unit,areas) {
      return {fillColor: getColor(unit)}
    };

    function onEachUnit(unit, layer) {
      const name = unit.properties.NAME;
      
      layer.bindTooltip(name, {
        permanent: true,
        direction: "center",
        className: "unit-labels",
        interactive: true,
      });

      layer.on({
        click: (event) => {
            dispatch(receiveUnit(event.target._tooltip._content));
        },
      });
    
    }

    return (
      <div className="map-container">
        {/* <div onClick={() => dispatch(getUnitMap())}>RETREIVE MAP DATA</div> */}
          <MapContainer 
            style={{ height: "80vh", width: "80wh"}}
            zoom={6}
            zoomControl={false}
            scrollWheelZoom={false}
            center={[45.5,-114]}
          >
            <GeoJSON 
              style={style}
              areas={areas}
              data={mapData.features} 
              onEachFeature={onEachUnit} />
          </MapContainer>
      </div>
    );
}

export default MyMap;
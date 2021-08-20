import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from '../../assets/data/mapData.json';
import { receiveUnit, receiveInvalidUnit } from '../../actions/map_actions';
import _ from 'lodash';
import '../../stylesheet/map.css';

const MyMap = ({areas}) => {

    const dispatch = useDispatch();
  
    const isValidArea = (unit) => {
      return (!_.isEmpty(areas) && areas.includes(unit));
    }

    const getColor = (unit) => {
      unit = unit.properties.NAME;
      //if unit exists within data set make it blue, otherwise make it red
      // changing a color here will chang the logic in onEachUnit fn within 
      // on click event handler
      return isValidArea(unit) ? "#bce4e8" : "#d10000";
    }

    function style(unit) {
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
          let zone = event.target._tooltip._content;
          let validzone = event.target.options.fillColor;
            validzone === "#bce4e8" ?
            dispatch(receiveUnit(zone)) :
            dispatch(receiveInvalidUnit(zone));
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
import { fetchUnitMap } from '../util/maps_routes';

export const RECEIVE_UNIT = "RECEIVE_UNIT";
export const RECEIVE_INVALID_UNIT = "RECEIVE_INVALID_UNIT";
export const RECEIVE_UNIT_MAP = "RECEIVE_UNIT_MAP";
export const RECEIVE_UNIT_MAP_ERROR = "RECEIVE_UNIT_MAP_ERROR";

export const receiveUnitMap = (map) => {
    return {
        type: RECEIVE_UNIT_MAP,
        map
    }
}

export const receiveUnit = (unit) => {
  return {
    type: RECEIVE_UNIT,
    unit,
  };
};

export const receiveInvalidUnit = (unit) => {
    return {
      type: RECEIVE_INVALID_UNIT,
      unit,
    };
}


export const receiveUnitMapError = (err) => {
    return {
        type: RECEIVE_UNIT_MAP_ERROR,
        err
    }
}

export const getUnitMap = () => dispatch => {
    
    fetchUnitMap()
        .then(map => {
            
            dispatch(receiveUnitMap(map))
        })
            .catch(err => {
                
                dispatch(receiveUnitMapError(err))
            })
}
import { fetchUnitMap } from '../util/maps_routes';

export const RECEIVE_UNIT_MAP = "RECEIVE_UNIT_MAP";
export const RECEIVE_UNIT_MAP_ERROR = "RECEIVE_UNIT_MAP_ERROR";

export const receiveUnitMap = (map) => {
    return {
        type: RECEIVE_UNIT_MAP,
        map
    }
}

export const receiveUnitMapError = (err) => {
    return {
        type: RECEIVE_UNIT_MAP_ERROR,
        err
    }
}

export const getUnitMap = () => dispatch => {
    debugger
    fetchUnitMap()
        .then(map => {
            debugger
            dispatch(receiveUnitMap(map))
        })
            .catch(err => {
                debugger
                dispatch(receiveUnitMapError(err))
            })
}
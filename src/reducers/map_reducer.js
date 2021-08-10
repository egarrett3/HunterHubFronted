import { RECEIVE_UNIT_MAP } from '../actions/map_actions';

const mapReducer = (state = {}, action) => {
    
    switch(action.type) {
        case RECEIVE_UNIT_MAP:
            const mapJSONpaths = action.map;
            return mapJSONpaths;
        default:
            return state
    }


}

export default mapReducer;
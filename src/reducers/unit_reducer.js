import { RECEIVE_UNIT,RECEIVE_INVALID_UNIT } from '../actions/map_actions';
import { RECEIVE_STATS } from '../actions/harvest_stats_actions';

const unitReducer = (state = {}, action) => {
    
    switch(action.type) {
        case RECEIVE_UNIT:
            const unit = action.unit;
            return { "defaultSearch": unit, "invalidUnit": false };
        case RECEIVE_INVALID_UNIT:
            const invalidUnit = action.unit;
            return { "invalidUnit" : invalidUnit }
        case RECEIVE_STATS:
            if (action.stats) {
                const animalObj = action.stats.data.result;
                let defaultSearch = '';
                animalObj[0].Unit 
                    ? defaultSearch = animalObj[0].Unit 
                    : defaultSearch = animalObj[0].HuntNumber

                return { "defaultSearch": defaultSearch };
            }
        default:
            return state
    }

}

export default unitReducer;
import { RECEIVE_STATS, RECEIVE_STATS_ERROR } from '../actions/harvest_stats_actions';
import merge from "lodash/merge";


const statsReducer = (state = {}, action) => {

    switch(action.type) {
        case RECEIVE_STATS:
            if (action.stats) {
                const animalObj = action.stats.data.result;
                const animalStats = merge({}, animalObj);
                return animalStats;
            }
        case RECEIVE_STATS_ERROR:
            if (action.err) {
                const error = action.error;
                const msg = merge({},error);
                return msg;
            } 
        default: 
            return state
    }
}

export default statsReducer;
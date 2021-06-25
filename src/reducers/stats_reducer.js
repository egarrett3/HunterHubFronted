import { RECEIVE_STATS, RECEIVE_STATS_ERROR } from '../actions/harvest_stats_actions';
import merge from "lodash/merge";


const statsReducer = (state = {}, action) => {

    switch(action.type) {
        case RECEIVE_STATS:
            const animalObj = action.stats;
            const animalStats = merge({}, animalObj);
            return animalStats;
        case RECEIVE_STATS_ERROR:
            return {
                error: "Houston We have a Problem"
            }
        default: 
            return state
    }
}

export default statsReducer;
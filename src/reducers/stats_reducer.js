import { RECEIVE_STATS, RECEIVE_STATS_ERROR } from '../actions/harvest_stats_actions';
import merge from "lodash/merge";

const statsReducer = (state = {}, action) => {
    
    switch(action.type) {
        case RECEIVE_STATS:
            if (action.stats) {
                const animalObj = action.stats.data.result;
                const animalStats = [];
                const huntableAreas = new Set;

                animalObj.forEach(element => {
                   animalStats.push(Object.entries(element)); 
                });

                animalStats.forEach(ele => {
                    ele.forEach(subEle => {
                        if (subEle[0] === 'Unit' || subEle[0] === "HuntNumber") {
                            huntableAreas.add(subEle[1]);
                        }
                    })
                })
                debugger
                return { ...state, 
                         "animalStats": {...animalStats}, 
                         "huntableAreas": {...Array.from(huntableAreas)} }
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
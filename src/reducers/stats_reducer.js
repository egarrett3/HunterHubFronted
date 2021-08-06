import { RECEIVE_STATS, RECEIVE_STATS_ERROR } from '../actions/harvest_stats_actions';
import merge from "lodash/merge";

const filterUnit = (harvestData,unit) => {
  let unitArr = [];
  if (!unit) { 
    unitArr.push(harvestData[0])
  }
  else {
    for (let i = 0; i < harvestData.length; i++) {
      harvestData[i].forEach((element) => {
        if ([...element].includes(unit)) {
          unitArr.push(harvestData[i]);
        }
      });
    }
  }
  
  return unitArr;
};

const statsReducer = (state = {}, action) => {
    
    switch(action.type) {
        case RECEIVE_STATS:
            if (action.stats) {
                const animalObj = action.stats.data.result;
                const unit = action.unit
                let animalStats = [];

                animalObj.forEach(element => {
                   animalStats.push(Object.entries(element)); 
                });

                const stats = filterUnit(animalStats,unit)

                return stats
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
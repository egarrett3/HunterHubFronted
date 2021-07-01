import { RECEIVE_STATS, RECEIVE_STATS_ERROR } from '../actions/harvest_stats_actions';
import merge from "lodash/merge";

const filterUnit = () => {
  let unitArr = [];
  for (let i = 0; i < harvestData.length; i++) {
    harvestData[i].forEach((element) => {
      if (element[0] === "Unit" && element[1] === "1") {
        unitArr.push(harvestData[i]);
      }
    });
  }
  return unitArr;
};

const statsReducer = (state = {}, action) => {

    switch(action.type) {
        case RECEIVE_STATS:
            if (action.stats) {
                const animalObj = action.stats.data.result;
                let animalStats = [];
                let unitArr = [];
                animalObj.forEach(element => {
                   animalStats.push(Object.entries(element)); 
                });
                for (let i = 0; i < animalStats.length; i++) {
                  animalStats[i].forEach((element) => {
                    if (element[0] === "Unit" && element[1] === "1") {
                      unitArr.push(animalStats[i]);
                    }
                  });
                }
                return unitArr;
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
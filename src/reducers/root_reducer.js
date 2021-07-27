import { combineReducers } from 'redux';
import authSessionReducer from './auth_reducer';
import authErrorReducer from './errors_reducer';
import statsReducer from './stats_reducer';
import statsOptionsReducer from './stats_options_reducer';

const rootReducer = combineReducers({
    session: authSessionReducer,
    errors: authErrorReducer,
    harvestData: statsReducer,
    HarvestHeaders: statsOptionsReducer
})

export default rootReducer;
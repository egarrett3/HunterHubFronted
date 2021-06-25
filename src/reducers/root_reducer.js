import { combineReducers } from 'redux';
import authSessionReducer from './auth_reducer';
import authErrorReducer from './errors_reducer';
import statsReducer from './stats_reducer';

const rootReducer = combineReducers({
    session: authSessionReducer,
    errors: authErrorReducer,
    harvestData: statsReducer
})

export default rootReducer;
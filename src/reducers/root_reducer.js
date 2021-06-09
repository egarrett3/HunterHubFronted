import { combineReducers } from 'redux';
import authSessionReducer from './auth_reducer';
import authErrorReducer from './errors_reducer';

const rootReducer = combineReducers({
    session: authSessionReducer,
    errors: authErrorReducer
})

export default rootReducer;
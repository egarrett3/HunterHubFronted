import { LOGIN_CURRENT_USER, RECEIVE_AUTH_ERRORS, CLEAR_ERRORS } from '../actions/auth_actions';
import merge from 'lodash/merge';

const _nullErrors = {}

const authErrorReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_AUTH_ERRORS:
            if (action.err) {
                const error = merge({},action.err)
                return error
            }
        case LOGIN_CURRENT_USER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors
        default:
            return state
    }
}

export default authErrorReducer;
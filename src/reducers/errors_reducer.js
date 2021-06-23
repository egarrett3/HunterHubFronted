import { RECEIVE_CURRENT_USER, RECEIVE_AUTH_ERRORS, CLEAR_ERRORS } from '../actions/auth_actions';
import merge from 'lodash/merge';

const _nullErrors = {}

const authErrorReducer = (state = {}, action) => {
    switch(action.type) {
        case RECEIVE_AUTH_ERRORS:
            if (action.err) {
                const errorMsg = action.err
                const error = merge({},errorMsg)
                return error
            }
        case RECEIVE_CURRENT_USER:
            return _nullErrors;
        case CLEAR_ERRORS:
            return _nullErrors
        default:
            return state
    }
}

export default authErrorReducer;
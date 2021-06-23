import { RECEIVE_CURRENT_USER } from '../actions/auth_actions';

const initialState = {
    isAuthenticated: false,
    currentUser: ''
}

const authSessionReducer = (state = initialState, action) => {

    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            const user = {
                ...state,
                isAuthenticated: !!action.user,
                currentUser: action.user.data
            }
            return user;
        default:
            return initialState
    }
}

export default authSessionReducer;
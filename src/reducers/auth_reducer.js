import { LOGIN_CURRENT_USER } from '../actions/auth_actions'

const initialState = {
    isAuthenticated: false,
    currentUser: ''
}

const authSessionReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOGIN_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.user,
                currentUser: action.user
            }
        default:
            return state
    }
}

export default authSessionReducer;
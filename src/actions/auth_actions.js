import * as APIutil from '../util/authentication';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_AUTH_ERRORS = "RECEIVE_AUTH_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const LOGIN_ROUTE = "LOGIN_ROUTE";

export const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
})

export const receiveErrors = (err) => ({
    type: RECEIVE_AUTH_ERRORS,
    err
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const login = (user) => dispatch => {
    APIutil.login(user)
        .then(user => dispatch(receiveCurrentUser(user.data)))
            .catch(err => dispatch(receiveErrors(err)))
}

export const signup = (user) => dispatch => {
    APIutil.signup(user)
        .then(user => dispatch(receiveCurrentUser(user.data)))
            .catch(err => dispatch(receiveErrors(err)))
}

// export const passwordSignupValidation = (password) => dispatch => {
//     APIutil.validatePassword(password)
//         .then(strength => dispatch(receiveErrors(strength.data)))
//             .catch(err => dispatch(receiveErrors(err.response.data)))
// }
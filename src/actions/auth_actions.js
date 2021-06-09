import * as APIutil from '../util/authentication';

export const LOGIN_CURRENT_USER = "LOGIN_CURRENT_USER";
export const RECEIVE_AUTH_ERRORS = "RECEIVE_AUTH_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const loginCurrentUser = (user) => ({
    type: LOGIN_CURRENT_USER,
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
        .then(user => dispatch(loginCurrentUser(user)))
            .catch(err => dispatch(receiveErrors(err.response.data)))
}

export const signup = (user) => dispatch => {
    APIutil.signup(user)
        .then(user => dispatch(loginCurrentUser(user)))
            .catch(err => dispatch(receiveErrors(err.response.data)))
}

// export const passwordSignupValidation = (password) => dispatch => {
//     APIutil.validatePassword(password)
//         .then(strength => dispatch(receiveErrors(strength.data)))
//             .catch(err => dispatch(receiveErrors(err.response.data)))
// }
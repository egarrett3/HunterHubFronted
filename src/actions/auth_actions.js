import * as Auth from '../util/authentication';

export const CURRENT_USER = "CURRENT_USER";
export const AUTH_ERRORS = "AUTH_ERRORS";

export const receiveCurrentUser = (user) => {
    return ({
        type: CURRENT_USER,
        user
    })
}

export const receiveErrors = (err) => {
    return ({
        type: AUTH_ERRORS,
        err
    })
}


export const login = (user) => dispatch => {
    Auth.login(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .catch(err => dispatch(receiveErrors(err)))
}

export const login = (user) => dispatch => {
    Auth.signup(user)
        .then(user => dispatch(receiveCurrentUser(user)))
        .catch(err => dispatch(receiveErrors(err)))
}
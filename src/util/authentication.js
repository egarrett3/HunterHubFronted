import axios from 'axios';

export const login = (user) => {
    return axios({
        method: 'POST',
        url:'/api/users/login',
        data: user
    });
}

export const signup = (user) => {
    return axios({
      method: "POST",
      url: "/api/users/register",
      data: user,
    });
}

// export const validatePassword = (password) => {
//     return axios({
//         method: "GET",
//         url: '/api/users/validate',
//         data: password
//     });
// }
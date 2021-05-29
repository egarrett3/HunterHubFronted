import axios from 'axios';

export const login = (user) => {
    debugger
    axios({
        method: 'POST',
        url:'/api/users/login',
        data: user
    }).then(response => console.log(response))
    .catch(err => console.log(err))
}

export const signup = (user) => {
    axios({
      method: "POST",
      url: "/api/users/register",
      data: user,
    })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
}

import React, { useState } from "react";
import { login } from "../../util/authentication";

const Login = ({updateValue,username,password,email}) => {

   const handleSubmit = (e) => {
     e.preventDefault();

     const user = {
       username: username,
       email: email,
       password: password,
     };

     login(user);
   };

   return (
     <>
        <form onSubmit={handleSubmit}>
            <input
                className="login-input"
                type="text"
                name="login-username"
                value={username}
                onChange={updateValue}
                placeholder="username"
            ></input>
            <input
                className="login-input"
                type="email"
                name="login-email"
                value={email}
                onChange={updateValue}
                placeholder="email"
            ></input>
            <input
                className="login-input"
                type="text"
                name="login-password"
                value={password}
                onChange={updateValue}
                placeholder="password"
            ></input>
            <input
                className="submitLoginForm"
                type="submit"
                value="Login"
            ></input>
        </form>
     </>
   );
}

export default Login;
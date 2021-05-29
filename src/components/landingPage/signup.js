import React, { useState } from "react";
import { signup } from "../../util/authentication";

const Signup = ({updateValue,username,password,email}) => {

   const handleSubmit = (e) => {
     e.preventDefault();

     const user = {
       username: username,
       email: email,
       password: password,
     };

     signup(user);
   };

   return (
     <>
        <form onSubmit={handleSubmit}>
            <input
                className="signup-input"
                type="text"
                name="signup-username"
                value={username}
                onChange={updateValue}
                placeholder="username"
            ></input>
            <input
                className="signup-input"
                type="email"
                name="signup-email"
                value={email}
                onChange={updateValue}
                placeholder="email"
            ></input>
            <input
                className="signup-input"
                type="text"
                name="signup-password"
                value={password}
                onChange={updateValue}
                placeholder="password"
            ></input>
            <input
                className="submitLoginForm"
                type="submit"
                value="Sign Up"
            ></input>
        </form>
    
     </>
   );
}

export default Signup;
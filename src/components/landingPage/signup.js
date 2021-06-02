import React, { useState } from "react";
import { signup } from "../../util/authentication";

const Signup = ({updateValue,username,password,email,toggle}) => {

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
       <form 
        className="user-auth-form" 
        onSubmit={handleSubmit}
        autoComplete="off"
       >
         <input
          autoComplete='false'
          className="signup-username"
          type="text"
          name="signup-username"
          value={username}
          onChange={updateValue}
          placeholder="username"
         ></input>
         <input
          autoComplete='false'
          className="signup-email"
          type="email"
          name="signup-email"
          value={email}
          onChange={updateValue}
          placeholder="email"
         ></input>
         <input
          className="signup-password"
          type="text"
          name="signup-password"
          value={password}
          onChange={updateValue}
          placeholder="password"
         ></input>
         <input
          className="signup-btn btn"
          type="submit"
          value="Sign Up"
         ></input>
       </form>
       <span className='form-text'>
         {" "}
         Already have an account? 
         <span className="switch-form" onClick={toggle}> Login </span>{" "}
       </span>
     </>
   );
}

export default Signup;
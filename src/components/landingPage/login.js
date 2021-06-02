import React, { useState } from "react";
import { login } from "../../util/authentication";

const Login = ({updateValue,username,password,email,toggle}) => {

   const handleSubmit = (e) => {
     e.preventDefault();

     const user = {
       email: email,
       password: password,
     };

     login(user);
   };

   return (
     <>
       <form 
        className="user-auth-form"
        onSubmit={handleSubmit} 
        autoComplete="off"
       >
         {/* <input
           className="login-input"
           type="text"
           name="login-username"
           value={username}
           onChange={updateValue}
           placeholder="username"
         ></input> */}
         <input
          autoComplete='false'
          className="login-email"
          type="text"
          name="login-email"
          value={email}
          onChange={updateValue}
          placeholder="email"
         ></input>
         <input
          className="login-password"
          type="text"
          name="login-password"
          value={password}
          onChange={updateValue}
          placeholder="password"
         ></input>
         <input 
          className="login-btn btn" 
          type="submit" 
          value="Login"
         ></input>
       </form>
       <span className='form-text'>
         {" "}
         Don&apos;t have an account? 
         <span className="switch-form" onClick={toggle}>
           {" "}
           Sign Up{" "}
         </span>{" "}
       </span>
     </>
   );
}

export default Login;
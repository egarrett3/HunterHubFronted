import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../actions/auth_actions";

const Login = ({updateValue,password,email,toggle,loginSelected}) => {

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    dispatch(login(user));
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
           autoComplete="false"
           className="login-email"
           type="text"
           name="login-email"
           value={email}
           onChange={updateValue}
           onFocus={() => loginSelected(true)}
           onBlur={() => loginSelected(false)}
           placeholder="email"
         ></input>
         <input
           className="login-password"
           type="text"
           name="login-password"
           value={password}
           onChange={updateValue}
           onFocus={() => loginSelected(true)}
           onBlur={() => loginSelected(false)}
           placeholder="password"
         ></input>
         <input className="login-btn btn" type="submit" value="Login"></input>
       </form>
       <span className="form-text">
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
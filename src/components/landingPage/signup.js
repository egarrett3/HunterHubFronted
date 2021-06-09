import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { signup } from "../../actions/auth_actions";

const Signup = (props) => {
  let {
    updateValue,
    username,
    password,
    email,
    toggle,
    pswdSelected,
    ispswdValid,
    isUserNameValid,
    userNameSelected,
    emailSelected
  } = props

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      username: username,
      email: email,
      password: password,
    };

    dispatch(signup(user));
  };  

  useEffect(() => {
    const signupBtn = document.querySelector(".signup-btn");
    
    ispswdValid && isUserNameValid 
      ? (signupBtn.disabled = false) : (signupBtn.disabled = true);
    // return () => {
    //   cleanup
    // }
  }, [ispswdValid, isUserNameValid]);

   return (
     <>
       <form
         className="user-auth-form"
         onSubmit={handleSubmit}
         autoComplete="off"
       >
         <input
           autoComplete="false"
           className="signup-username"
           type="text"
           name="signup-username"
           value={username}
           onChange={updateValue}
           onFocus={() => userNameSelected(true)}
           onBlur={() => userNameSelected(false)}
           placeholder="username"
         ></input>
         <input
           autoComplete="false"
           className="signup-email"
           type="email"
           name="signup-email"
           value={email}
           onChange={updateValue}
           onFocus={() => emailSelected(true)}
           onBlur={() => emailSelected(false)}
           placeholder="email"
         ></input>
         <input
           className="signup-password"
           type="text"
           name="signup-password"
           value={password}
           onChange={updateValue}
           onFocus={() => pswdSelected(true)}
           onBlur={() => pswdSelected(false)}
           placeholder="password"
         ></input>
         <input
           className="signup-btn btn"
           type="submit"
           value="Sign Up"
         ></input>
       </form>
       <span className="form-text">
         {" "}
         Already have an account?
         <span 
          className="switch-form" 
          onClick={toggle}>
           {" "}
           Login{" "}
         </span>{" "}
       </span>
     </>
   );
}

export default Signup;
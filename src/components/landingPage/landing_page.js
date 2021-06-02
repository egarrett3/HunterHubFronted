import React, { useState, useEffect } from 'react';
import Login from './login';
import Signup from './signup';
import '../../stylesheet/landing_page.css'

const LandingPage = () => {
    const [loginusername, setLoginUsername] = useState('');
    const [loginemail, setLoginEmail] = useState('');
    const [loginpassword, setLoginPassword] = useState('');
    const [signupusername, setSignupUsername] = useState('');
    const [signupemail, setSignupEmail] = useState('');
    const [signuppassword, setSignupPassword] = useState('');

    const [toggle,setToggle] = useState(true);

    function toggleAuth() {
      setToggle(!toggle);
    }

    function updateValue(e) {
        switch(e.target.name) {
            case 'login-username':
                setLoginUsername(e.target.value)
                break;
            case 'login-password':
                setLoginPassword(e.target.value)
                break;
            case 'login-email':
                setLoginEmail(e.target.value)
                break;
            case 'signup-username':
                setSignupUsername(e.target.value)
                break;
            case 'signup-password':
                setSignupPassword(e.target.value)
                break;
            case 'signup-email':
                setSignupEmail(e.target.value)
                break;
            default:
                break;
        }
    }

    return (
      <>
        <div className="user-entrance">
          {toggle ? (
            <Login
              updateValue={updateValue}
              username={loginusername}
              password={loginpassword}
              email={loginemail}
              toggle={toggleAuth}
            ></Login>
          ) : (
            <Signup
              updateValue={updateValue}
              username={signupusername}
              password={signuppassword}
              email={signupemail}
              toggle={toggleAuth}
            ></Signup>
          )}
        </div>
      </>
    );

}

export default LandingPage;
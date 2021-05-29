import React, { useState } from 'react';
import Login from './login';
import Signup from './signup';

const LandingPage = () => {
    const [ loginusername, setLoginUsername] = useState('');
    const [ loginemail, setLoginEmail] = useState('');
    const [ loginpassword, setLoginPassword] = useState('');
    const [ signupusername, setSignupUsername] = useState('');
    const [ signupemail, setSignupEmail] = useState('');
    const [ signuppassword, setSignupPassword] = useState('');

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
            <Login 
                updateValue={updateValue}
                username={loginusername}
                password={loginpassword}
                email={loginemail}
            ></Login>
            <Signup 
                updateValue={updateValue}
                username={signupusername}
                password={signuppassword}
                email={signupemail}
            ></Signup>
        </div>
      </>
    );

}

export default LandingPage;
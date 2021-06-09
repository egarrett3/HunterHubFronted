import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Login from './login';
import Signup from './signup';
import Validation from './validations';
import _ from "lodash";
import '../../stylesheet/landing_page.css';
import { clearErrors } from '../../actions/auth_actions';
import isEmpty from 'lodash/isEmpty';

const LandingPage = () => {
    //login and signup user information
    const [loginusername, setLoginUsername] = useState('');
    const [loginemail, setLoginEmail] = useState('');
    const [loginpassword, setLoginPassword] = useState('');
    const [signupusername, setSignupUsername] = useState('');
    const [signupemail, setSignupEmail] = useState('');
    const [signuppassword, setSignupPassword] = useState('');
    const [ispswdSelected, setispswdSelected] = useState(false);
    const [ispswdValid, setispswdValid] = useState(false);
    const [isUserNameSelected, setisUserNameSelected] = useState(false);
    const [isUserNameValid, setisUserNameValid] = useState(false);
    const [isEmailSelected, setisEmailSelected] = useState(false);
    const [isLoginSelected, setisLoginSelected] = useState(false);
    
    // validation of password during signup
    const [validate, setValidate] = useState({
      length: true,
      numbers: true,
      symbols: true,
      uppercase: true,
      userNameContents: true,
      userNameLngth: true,
    });

    // toggle between signup and login form
    const [toggle,setToggle] = useState(true);

    const dispatch = useDispatch();

    const authErrors = useSelector((state) => {
        return state.errors
    });

    function toggleAuth() {
      setToggle(!toggle);
      setValidate({
        length: true,
        numbers: true,
        symbols: true,
        uppercase: true,
        userNameContents: true,
        userNameLngth: true,
      });
      dispatch(clearErrors())
    }  

    function pswdSelected(bool) {
      setispswdSelected(bool);
    }

    function userNameSelected(bool) {
      setisUserNameSelected(bool);
    }

    function emailSelected(bool) {
      setisEmailSelected(bool);
    }

    function loginSelected(bool) {
      setisLoginSelected(bool)
    }

    function userNameLngth(userName) {
      return userName.length > 5;
    }

    function userNameContents(userName) {
      let contents = new RegExp("[^a-zA-Z0-9][^\s]{0}","gi");
      let filter = userName.match(contents);
      return filter === null ? true : false;
    }

    function minLength(pswd) {
      return pswd.length > 7;
    }

    function minNum(pswd) {
      let number = new RegExp("[0-9]","g");
      let filter = pswd.match(number);
      return filter ? filter.length > 1 : false
    }

    function minSym(pswd) {
      let symbol = new RegExp("[^a-zA-Z0-9][^\s]{0}", "gi");
      let filter = pswd.match(symbol);
      return filter ? filter.length > 0 : false
    }

    function minUppercase(pswd) {
      let uppercase = new RegExp("[A-Z]", "g");
      let filter = pswd.match(uppercase);
      return filter ? filter.length > 1 : false;
    }

    function attachErrorMessage(key) {
      switch(key) {
        case 'symbols':
          return `<li>requires at least 1 symbol</li>`;
        case 'uppercase':
          return `<li>requires two uppercase</li>`;
        case 'numbers':
          return `<li>requires at least 2 numbers</li>`;
        case 'length':
          return `<li>requires min length of 8</li>`;
        case 'userNameContents':
          return `<li>can contain numbers or letters</li>`;
        case 'userNameLngth':
          return `<li>must be at least 6 characters</li>`;
        default:
          return `<></>`
      }
    }

    const validatePassword = _.debounce(() => {
      let pswd = signuppassword.trim();
      let minL = minLength(pswd)
      let minN = minNum(pswd)
      let minS = minSym(pswd)
      let minUp = minUppercase(pswd)

      minL && minN && minS && minUp 
       ? setispswdValid(true) 
       : setispswdValid(false);

      setValidate({
        length: minL,
        numbers: minN,
        symbols: minS,
        uppercase: minUp,
        userNameContents: true,
        userNameLngth: true,
      });
    },500);

    const validateUsername = _.debounce(() => {
      let userName = signupusername.trim();
      let validContent = userNameContents(userName);
      let validLngth = userNameLngth(userName);
       
      validContent && validLngth
       ? setisUserNameValid(true) 
       : setisUserNameValid(false);

       setValidate({
         length: true,
         numbers: true,
         symbols: true,
         uppercase: true,
         userNameContents: validContent,
         userNameLngth: validLngth,
       });
    },500);

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

    useEffect(() => {
      if(ispswdSelected) {
        validatePassword();
      }

      if(isUserNameSelected) {
        validateUsername();
      }
      
      if(isEmailSelected) {
        setValidate({
          length: true,
          numbers: true,
          symbols: true,
          uppercase: true,
          userNameContents: true,
          userNameLngth: true,
        });
      }

      if ((isEmailSelected || isUserNameSelected || ispswdSelected)
        && !isEmpty(authErrors)) {
        dispatch(clearErrors())
      }

      // return () => {

      // }
    }, [ispswdSelected,signuppassword,isUserNameSelected,signupusername,signupemail,isEmailSelected]);


    return (
      <>
        <div className="user-authAndError-container">
          <div className="user-entrance">
            {toggle ? (
              <Login
                updateValue={updateValue}
                username={loginusername}
                password={loginpassword}
                email={loginemail}
                loginSelected={loginSelected}
                toggle={toggleAuth}
              ></Login>
            ) : (
              <Signup
                updateValue={updateValue}
                username={signupusername}
                password={signuppassword}
                email={signupemail}
                pswdSelected={pswdSelected}
                ispswdValid={ispswdValid}
                userNameSelected={userNameSelected}
                emailSelected={emailSelected}
                isUserNameValid={isUserNameValid}
                toggle={toggleAuth}
              ></Signup>
            )}
          </div>
            {/* {toggle ? (
              <></>
            ) : ( */}
              <Validation 
                attachErrorMessage={attachErrorMessage}
                isLoginSelected={isLoginSelected}
                authErrors={authErrors}
              >
                {validate}
              </Validation>
            {/* )} */}
        </div>
      </>
    );

}

export default LandingPage;
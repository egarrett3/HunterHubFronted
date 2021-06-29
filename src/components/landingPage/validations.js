import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { clearErrors } from '../../actions/auth_actions'; 
import isEmpty from 'lodash/isEmpty';

const Validation = ({children,attachErrorMessage,isLoginSelected,authErrors}) => {

    const dispatch = useDispatch();

    function filterErrors(authErrors) {
        const keys = Object.keys(children);
        const userAuthReqs = document.querySelector('.userAuth-reqs');

        const userAuthReqMessages = keys.map((key) => {
            if (!children[key]) {
                return attachErrorMessage(key);
            }
        }).join("");

    
        const authErrorArray = authErrors ? Object.values(authErrors) : undefined;
        const serverAuthErrors = authErrorArray.map(error => {
            return `<li>${error}</li>`; 
        }).join("")
        
        userAuthReqs.innerHTML = userAuthReqMessages || serverAuthErrors;
    }

    useEffect(() => {
        filterErrors(authErrors);

        if (isLoginSelected && !isEmpty(authErrors)) {
            dispatch(clearErrors())
        }
    }, [children, authErrors, isLoginSelected]);

    return (
        <>
            <ul className="userAuth-reqs"></ul>
        </>
    );
}

export default Validation;
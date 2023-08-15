import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { Link, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { loginUser } from "../../fetchdata/fetchLogin.js";
import { useDispatch, useSelector } from 'react-redux';
// import { clearErrors } from '../../reducers/userReducer.js'
import { useAlert } from 'react-alert';
import Loader from '.././layouts/loader/Loader.js';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { loading, error, isAuthenticated, user } = useSelector((state) => state.users.user)
    const alert = useAlert()
    const [loginEmail, setLoginEmail] = useState('')//this for user email 
    const [loginPassword, setLoginPassword] = useState('')//this for user password 


    useEffect(() => {
        if (error) {
            alert.error(error)
        }
        if (isAuthenticated) {
            navigate('/profile')
        }

    }, [dispatch, alert, error, isAuthenticated, navigate, user])
    // login function start here 
    const loginSubmit = (e) => {
        e.preventDefault()
        if (!loginEmail || !loginPassword) {
            alert.error("Please enter both email and password.");
            return; // Exit the function if either field is empty
        }
        else {
           let info = { loginEmail, loginPassword }
            dispatch(loginUser(info))
        }
    }


    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="LoginSignUpContainer">
                        <div className="LoginSignUpBox">
                            <form className="loginForm" onSubmit={loginSubmit} >
                                <div className="loginEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={loginEmail}
                                        onChange={(e) => { setLoginEmail(e.target.value) }}
                                    />
                                </div>
                                <div className="loginPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={loginPassword}
                                        onChange={(e) => { setLoginPassword(e.target.value) }}
                                    />
                                </div>
                              
                               <Link to="/register">create acount</Link>
                               <Link to="/password/forgot">Forget Password ?</Link>
                              
                              

                                <input type="submit" value="Login" className="loginBtn" />
                            </form>


                        </div>
                    </div>
                </Fragment>}

        </Fragment>

    )
}
export default Login
import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { loginUser } from "../../fetchdata/fetchLogin.js";
import { useDispatch, useSelector } from 'react-redux'
import { clearErrors } from '../../reducers/userReducer.js'
import { useAlert } from 'react-alert'
import Loader from '.././layouts/loader/Loader.js'
import { registerUser } from "../../fetchdata/fetchRegister.js";

const LoginSignUp = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user, loading, error, isAuthenticated } = useSelector((state) => state.users)
    const alert = useAlert()
    let [loginEmail, setLoginEmail] = useState('')//this for user email 
    let [loginPassword, setLoginPassword] = useState('')//this for user password 
    let [avatar, setAvatar] = useState('')//this for user password 
    let [avatarPreview, setAvatarPreview] = useState('/Profile.png')//this for user password 
    const [usernow, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })
    // here is reference 
    const switcherTab = useRef(null)
    const registerTab = useRef(null)
    const loginTab = useRef(null)
    const { name, email, password } = usernow
    // here is switcher tab button 
    const switchTabs = (e, tab) => {
        if (tab === 'login') {
            switcherTab.current.classList.add("shiftToNeutral");
            switcherTab.current.classList.remove("shiftToRight");
            registerTab.current.classList.remove("shiftToNeutralForm");
            loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === 'register') {
            switcherTab.current.classList.add("shiftToRight");
            switcherTab.current.classList.remove("shiftToNeutral");
            registerTab.current.classList.add("shiftToNeutralForm");
            loginTab.current.classList.add("shiftToLeft")
        }
    }
    // here user login 
    useEffect(() => {
        alert.error(error)
        if (error) {
            dispatch(clearErrors())
        }
        if (isAuthenticated) {
            navigate('/acount')
        }
    }, [dispatch, alert, error, isAuthenticated, navigate])
    const loginSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({loginEmail,loginPassword}))
    }
    // here user register form 
    const registerSubmit = (e) => {
        e.preventDefault()
        let myForm = new FormData()//this is built in functio in react.js
        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("password", password)
        myForm.set("avater", avatar)
        dispatch(registerUser({ myForm }))
    }
    const registerDataChange = (e) => {
        if (e.target.name === 'avatar') {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatarPreview(reader.result);
                    setAvatar(reader.result);
                }
            };

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...usernow, [e.target.name]: [e.target.value] })
        }
    }


    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="LoginSignUpContainer">
                        <div className="LoginSignUpBox">
                            <div>
                                <div className="login_signUp_toggle">
                                    <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                                    <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>
                            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit} >
                                <div className="loginEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
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
                                        value={loginPassword}
                                        onChange={(e) => { setLoginPassword(e.target.value) }}
                                    />
                                </div>
                                <Link to="/password/forgot">Forget Password ?</Link>
                                <input type="submit" value="Login" className="loginBtn" />
                            </form>

                            <form className="signUpForm" ref={registerTab} encType="multipart/form-data" onSubmit={registerSubmit} >
                                <div className="signUpName">
                                    <FaceIcon />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpEmail">
                                    <MailOutlineIcon />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpPassword">
                                    <LockOpenIcon />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={registerDataChange} />
                                </div>

                                <div id="registerImage">
                                    <img src={avatarPreview} alt="Avatar Preview" />
                                    <input
                                        type="file"
                                        name="avatar"
                                        accept="image/*"
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <input type="submit" value="Register" className="signUpBtn" />
                            </form>
                        </div>
                    </div>
                </Fragment>}

        </Fragment>

    )
}
export default LoginSignUp
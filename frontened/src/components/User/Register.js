import React, { Fragment, useState } from 'react'
import Loader from '../layouts/loader/Loader'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../fetchdata/fetchRegister'
import FaceIcon from "@material-ui/icons/Face";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import "./LoginSignUp.css";

function Register() {
    const { loading, error, isAuthenticated } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    // let [avatar, setAvatar] = useState('')//this for user password 
    // let [avatarPreview, setAvatarPreview] = useState('/Profile.png')//this for user password 
    const [usernow, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { name, email, password } = usernow

    const registerSubmit = async (e) => {
        console.log(error)
        e.preventDefault()
        let myForm = new FormData()//this is built in functio in react.js
        // myForm.set("avater", avatar)
        myForm.set("name", name)
        myForm.set("email", email)
        myForm.set("password", password)
        // alert(`${name}${email}${password}`)
        dispatch(registerUser(myForm))
    }
    const registerDataChange = (e) => {
        // if (e.target.name === 'avatar') {
        //     const reader = new FileReader();

        //     reader.onload = () => {

        //         if (reader.readyState === 2) {
        //             setAvatarPreview(reader.result);
        //             setAvatar(reader.result);
        //         }
        //     };
        //     console.log(e)
        //     reader.readAsDataURL(e.target.files[0])

        // } else {
        setUser({ ...usernow, [e.target.name]: [e.target.value] })

    }
  // <img src={avatarPreview} alt="Avatar Preview" />
    // <input
    //     type="file"
    //     name="avatar"
    //     accept="image/*"
    //     onChange={registerDataChange}
    // />
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="LoginSignUpContainer">
                        <div className="LoginSignUpBox">
                            <form className="signUpForm" encType="multipart/form-data" onSubmit={registerSubmit} >
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

                                </div>
                                <input type="submit" value="Register" className="signUpBtn" />
                            </form>
                        </div>
                    </div>
                </Fragment>}

        </Fragment>

    )
}

export default Register
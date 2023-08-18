import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../../fetchdata/fetchRegister'
import { useAlert } from 'react-alert'
import "./LoginSignUp.css";
import { clearErrors } from '../../reducers/userReducer.js'
function Register() {
    const { error, isAuthenticated } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()
    let [avatar, setAvatar] = useState('/Profile.png')//this for user password 
    let [avatarPreview, setAvatarPreview] = useState('/Profile.png')//this for user password 
    const [usernow, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const { name, email, password } = usernow

    const registerSubmit = async (e) => {

        e.preventDefault()
        console.log('this is  ',avatar)
        let myForm = new FormData()//this is built in functio in react.js
        // myForm.set("avater", avatar)
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("avatar", avatar);
        // alert(`${name}${email}${password}`)
        dispatch(registerUser(myForm));
        if (error) { alert.error(error) }

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
            reader.readAsDataURL(e.target.files[0]);

        } else {
            setUser({ ...usernow, [e.target.name]: [e.target.value] });

        }
    }
    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch(clearErrors());
        }

        if (isAuthenticated) {
            navigate('/products');
        }
    }, [dispatch, error, alert, isAuthenticated, navigate]);
    return (


        <Fragment>
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-lg">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                        Get started today
                    </h1>

                    <form encType="multipart/form-data"
                        action=""
                        className="mb-0 mt-5 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={registerSubmit}
                    >
                        <p className="text-center text-lg font-medium">Sign up to your account</p>

                        <div>
                            <label for="email" className="sr-only">Name</label>

                            <div className="relative">
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
                                    type="text"
                                    placeholder="Name"
                                    required
                                    name="name"
                                    value={name}
                                    onChange={registerDataChange}
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="email" className="sr-only">Email</label>

                            <div className="relative">
                                <input
                                    className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
                                    type="email"
                                    placeholder="Email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={registerDataChange}
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label for="password" className="sr-only">Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
                                    placeholder="Password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={registerDataChange} />


                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
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
                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        </Fragment>

    )
}

export default Register
// <Fragment>
// <div className="LoginSignUpContainer">
//     <div className="LoginSignUpBox">
//         <form className="signUpForm" encType="multipart/form-data" onSubmit={registerSubmit} >
//             <div className="signUpName">
//                 <FaceIcon />
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     required
//                     name="name"
//                     value={name}
//                     onChange={registerDataChange}
//                 />
//             </div>
//             <div className="signUpEmail">
//                 <MailOutlineIcon />
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     required
//                     name="email"
//                     value={email}
//                     onChange={registerDataChange}
//                 />
//             </div>
//             <div className="signUpPassword">
//                 <LockOpenIcon />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     required
//                     name="password"
//                     value={password}
//                     onChange={registerDataChange} />
//             </div>

//             <div id="registerImage">
 // <img src={avatarPreview} alt="Avatar Preview" />
    // <input
    //     type="file"
    //     name="avatar"
    //     accept="image/*"
    //     onChange={registerDataChange}
    // />
//             </div>
//             <input type="submit" value="Register" className="signUpBtn" />
//         </form>
//     </div>
// </div>

// </Fragment>
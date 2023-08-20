import React, { Fragment, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../fetchdata/fetchLogin.js";
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Loader from "../layouts/loader/Loader.js";

function Login() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { loading, error, isAuthenticated, user } = useSelector((state) => state.users)
    const alert = useAlert()
    // const [val, setVal] = useState('')//this for user email 
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
        navigate('/')
        if (!loginEmail || !loginPassword) {
            alert.error("Please enter both email and password.");
            return; // Exit the function if either field is empty
        }
        if (error) {
            alert.error(error)
        }
        let info = { loginEmail, loginPassword }
        dispatch(loginUser(info))
    }
    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-lg">
                            <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
                                Get started today
                            </h1>

                            <form
                                action=""
                                className="mb-0 mt-5 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={loginSubmit}
                            >
                                <p className="text-center text-lg font-medium">Sign in to your account</p>

                                <div>
                                    <label for="email" className="sr-only">Email</label>

                                    <div className="relative">
                                        <input
                                            type="email"
                                            className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
                                            placeholder="Enter email"
                                            autoComplete="@gmail.com"
                                            value={loginEmail}
                                            onChange={(e) => { setLoginEmail(e.target.value) }}
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
                                            placeholder="Enter password"
                                            name="password"
                                            value={loginPassword}
                                            onChange={(e) => { setLoginPassword(e.target.value) }}
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

                                <button
                                    type="submit"
                                    className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                                >
                                    Sign in
                                </button>

                                <p className="text-center text-sm text-gray-500">
                                    No account?
                                    <Link to='/register'  ><span className="underline text-blue-600 cursor-pointer pl-1" >Sign up</span></Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </Fragment>}
        </Fragment>
    )
}
// <input type="file" onChange={(e) => {
//     setVal(e.target.value)
// }} />

export default Login
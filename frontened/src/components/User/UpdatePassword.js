// import React, { Fragment, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPasswordUpdate } from '../../fetchdata/fetchUpdatePassword.js'
// import { useAlert } from 'react-alert'
// import "./LoginSignUp.css";
// import { clearErrors, updatePasswordReset } from '../../reducers/updatePassword.js'
// function UpdatePassword() {
//     const { error, isUpdated, loading } = useSelector((state) => state.profileUpdate)
//     const { isAuthenticated } = useSelector((state) => state.users)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const alert = useAlert()
//     const [userState, setUser] = useState({
//         password: "",
//         newPassword: "",
//         confirmPassword: "",
//     })

//     const { oldPassword, newPassword, confirmPassword } = userState

//     const registerSubmit = async (e) => {
//         e.preventDefault()
//         let myForm = new FormData()//this is built in functio in react.js
//         // myForm.set("avater", avatar)
//         myForm.set("oldPassword", oldPassword);
//         myForm.set("newPassword", newPassword);
//         myForm.set("confirmPassword", confirmPassword);
//         dispatch(fetchPasswordUpdate(myForm));
//         if (error) {
//             alert.error(error)
//         }
//         if (isUpdated) {
//             navigate('/products');
//             alert.success('Password updated successfully ');
//             updatePasswordReset()
//         }
//     }
//     const registerDataChange = (e) => {
//         setUser({ ...userState, [e.target.name]: [e.target.value] });
//     }
//     useEffect(() => {
//         if (error) {
//             alert.error(error);
//             dispatch(clearErrors());
//         }
//         if (!isAuthenticated) {
//             navigate('/login');
//             alert.error('login first to update the password')
//         }
//     }, [dispatch, error, alert, isAuthenticated, navigate]);
//     return (


//         <Fragment>
//             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//                 <div className="mx-auto max-w-lg">
//                     <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
//                         Lets Update Your Password
//                     </h1>

//                     <form encType="multipart/form-data"
//                         action=""
//                         className="mb-0 mt-5 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={registerSubmit}
//                     >
//                         <p className="text-center text-lg font-medium">Update password 🔐</p>

//                         <div>

//                             <div className="relative">
//                                 <input
//                                     className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
//                                     type="password"
//                                     placeholder="oldPassword"
//                                     required
//                                     name="oldPassword"
//                                     value={oldPassword}
//                                     onChange={registerDataChange}
//                                 />
//                             </div>
//                         </div>

//                         <div>

//                             <div className="relative">
//                                 <input
//                                     className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
//                                     type="password"
//                                     placeholder="newPassword"
//                                     required
//                                     name="newPassword"
//                                     value={newPassword}
//                                     onChange={registerDataChange}
//                                 />

//                             </div>
//                         </div>

//                         <div>

//                             <div className="relative">
//                                 <input
//                                     type="password"
//                                     className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
//                                     placeholder="confirmPassword"
//                                     required
//                                     name="confirmPassword"
//                                     value={confirmPassword}
//                                     onChange={registerDataChange} />
//                             </div>
//                         </div>

//                         <button
//                             type="submit"
//                             className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
//                         >
//                             Update
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </Fragment>

//     )
// }

// export default UpdatePassword
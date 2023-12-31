// import React, { Fragment, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useAlert } from 'react-alert';
// import "./LoginSignUp.css";
// import { clearErrors } from '../../reducers/userReducer.js';
// import { fetchProfileUpdate } from '../../fetchdata/fetchUpdateProfile';
// import MetaData from '../layouts/MetaData.js'
// import { userProfile } from '../../fetchdata/fetchProfile.js';
// import { updateProfileReset } from '../../reducers/profileUpdateUser.js';

// function ProfileUpdate() {
//     const { user, isAuthenticated } = useSelector((state) => state.users)
//     const { error, isUpdated } = useSelector((state) => state.profileUpdate)
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const alert = useAlert()
//     let [avatar, setAvatar] = useState('/Profile.png')//this for user password 
//     let [avatarPreview, setAvatarPreview] = useState('/Profile.png')//this for user password 
//     let [userState, setUser] = useState({
//         name: "",
//         email: ""
//     })

//     let { name, email } = userState
//     const registerSubmit = async (e) => {
//         e.preventDefault()
//         let myForm = new FormData()//this is built in functio in react.js
//         // myForm.set("avater", avatar)
//         myForm.set("name", name);
//         myForm.set("email", email);
//         myForm.set("avatar", avatar);
//         // alert(`${name}${email}${password}`)
//         dispatch(fetchProfileUpdate(myForm));
//         if (error) { alert.error(error) }
//         if (isUpdated) {
//             navigate('/profile')
//         }

//     }
//     const registerDataChange = (e) => {
//         if (e.target.name === 'avatar') {
//             const reader = new FileReader();

//             reader.onload = () => {
//                 if (reader.readyState === 2) {
//                     setAvatarPreview(reader.result);
//                     setAvatar(reader.result);
//                 }
//             };
//             reader.readAsDataURL(e.target.files[0]);

//         } else {
//             setUser({ ...userState, [e.target.name]: [e.target.value] });

//         }
//     }
//     useEffect(() => {
//         if (user) {
//             setUser({
//                 name: user.name,
//                 email: user.email
//             })
//             setAvatarPreview(user.avatar?.url);
//         }
//         if (!isAuthenticated) {
//             navigate('/login')
//             alert.success('login first')
//         }
//         if (error) {
//             alert.error(error);
//             dispatch(clearErrors());
//         }
//         if (isUpdated) {
//             alert.success("Profile Updated Successfully");
//             dispatch(userProfile());
//             dispatch(updateProfileReset());

//             navigate("/profile");
//         }

//     }, [dispatch, error, alert, navigate, user, isUpdated, isAuthenticated]);
//     return (
//         <Fragment>
//             <MetaData title='update-profile' />
//             <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//                 <div className="mx-auto max-w-lg">
//                     <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
//                         Upadte Account
//                     </h1>

//                     <form encType="multipart/form-data"
//                         action=""
//                         className="mb-0 mt-5 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={registerSubmit}
//                     >
//                         <p className="text-center text-lg font-medium"><span className='text-green-500' >{user?.name}</span> update your account</p>

//                         <div>
//                             <label for="email" className="sr-only">Name</label>

//                             <div className="relative">
//                                 <input
//                                     className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
//                                     type="text"
//                                     placeholder="Name"
//                                     name="name"

//                                     value={name}
//                                     onChange={registerDataChange}
//                                 />

//                                 <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-4 w-4 text-gray-400"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             stroke-width="2"
//                                             d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                                         />
//                                     </svg>
//                                 </span>
//                             </div>
//                         </div>

//                         <div>
//                             <label for="email" className="sr-only">Email</label>

//                             <div className="relative">
//                                 <input
//                                     className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
//                                     type="email"
//                                     placeholder="Email"

//                                     name="email"
//                                     value={email}
//                                     onChange={registerDataChange}
//                                 />

//                                 <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-4 w-4 text-gray-400"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             stroke-linecap="round"
//                                             stroke-linejoin="round"
//                                             stroke-width="2"
//                                             d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
//                                         />
//                                     </svg>
//                                 </span>
//                             </div>
//                         </div>



//                         <div id="registerImage">
//                             <img src={avatarPreview} alt="Avatar Preview" />
//                             <input
//                                 type="file"
//                                 name="avatar"
//                                 accept="image/*"
//                                 onChange={registerDataChange}
//                             />
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

// export default ProfileUpdateProfileUpdate;

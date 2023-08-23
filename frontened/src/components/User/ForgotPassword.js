// import React, { Fragment, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { fetchPasswordForgot } from '../../fetchdata/fetchForgotPassword.js'
// import { useAlert } from 'react-alert'
// import "./LoginSignUp.css";
// import { clearErrors } from '../../reducers/userReducer.js'
// function Register() {
//   const { isAuthenticated } = useSelector((state) => state.users)
//   const { message, error, loading } = useSelector((state) => state.forgotPassword)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const alert = useAlert()
//   const [email, setEmail] = useState('')

//   // for submit here 
//   const registerSubmit = async (e) => {
//     e.preventDefault()
//     let myForm = new FormData()//this is built in functio in react.js
//     myForm.set("email", email);
//     dispatch(fetchPasswordForgot(myForm));
//     if (error) { alert.error(error) }
//   }
//   // input change here 
//   const registerDataChange = (e) => {
//     setEmail(e.target.value)
//   }
// //
//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }

//     if (message) {
//       alert.success(message)
//     }
//     if (isAuthenticated) {
//       navigate('/products');
//       alert.error('you have already login unable to forgot password logout first')
//     }
//   }, [dispatch, error, alert, isAuthenticated, navigate, message]);
//   return (


//     <Fragment>
//       <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
//         <div className="mx-auto max-w-lg">
//           <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
//             Lets forgot password
//           </h1>

//           <form
//             action=""
//             className="mb-0 mt-5 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8" onSubmit={registerSubmit}
//           >
//             <p className="text-center text-lg font-medium">forgot your password</p>

//             <div>

//               <div className="relative">
//                 <input
//                   className="w-full rounded-lg border-gray-200 p-3 pe-12 text-sm shadow-sm"
//                   type="email"
//                   placeholder="Email"
//                   required
//                   name="name"
//                   value={email}
//                   onChange={registerDataChange}
//                 />


//               </div>
//             </div>


//             <button
//               type="submit"
//               className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>
//     </Fragment>

//   )
// }

// export default Register
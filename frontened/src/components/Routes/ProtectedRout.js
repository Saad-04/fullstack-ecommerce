// import React from 'react'
// import { useSelector } from 'react-redux'
// import { Route, useNavigate } from 'react-router-dom'

// function ProtectedRout({ element: Element, ...rest }) {
//     const { isAuthenticated, user, loading } = useSelector(state => state.users)
//     const navigate = useNavigate()

//     return (
//         (!loading) && (
//             <Route {...rest} render={(prop) => {
//                 if (!isAuthenticated) {
//                     return navigate('/login')
//                 }
//                 return <Element {...prop} />
//             }} />
//         )

//     )
// }

// export default ProtectedRout
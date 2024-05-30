// import { PropsWithChildren, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// type ProtectedRouteProps = PropsWithChildren<{
//     roleProp: string
// }>

// export default function ProtectedRoute({
//     children,
//     roleProp,
// }: ProtectedRouteProps): JSX.Element {
//     const navigate = useNavigate()

//     useEffect(() => {
//         const isLoggedIn = localStorage.getItem('isLoggedIn')
//         if (!isLoggedIn) {
//             navigate('/login')
//         }
//     }, [navigate])

//     useEffect(() => {
//         const role = localStorage.getItem('role')

//         if (role !== roleProp) {
//             navigate('/login')
//         }
//     }, [navigate, roleProp])

//     return <>{children}</>
// }

import { PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

type ProtectedRouteProps = PropsWithChildren<{
  roleProp: string[];
}>;

export default function ProtectedRoute({
  children,
  roleProp,
}: ProtectedRouteProps): JSX.Element {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    const role = localStorage.getItem('role');

    if (!role || !roleProp.includes(role)) {
      navigate('/login');
    }
  }, [navigate, roleProp]);

  return <>{children}</>;
}

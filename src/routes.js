import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const MainLayout = lazy(() => import('./components/layouts/MainLayout'));
const ConfirmEmail = lazy(() => import('./pages/ConfirmEmail'));
const ForgetPassword = lazy(() => import('./pages/ForgetPassword'));
const Login = lazy(() => import('./pages/Login'));
const Logout = lazy(() => import('./pages/Logout'));
const NewPassword = lazy(() => import('./pages/NewPassword'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));


const routes = [
   
  {
    path: '/auth',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'logout', element: <Logout /> },
      { path: 'register', element: <Register /> },
      { path: 'forget-password', element: <ForgetPassword /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'new-password', element: <NewPassword /> },
      { path: 'confirm-email', element: <ConfirmEmail /> },
      
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <div/>,
    children:[
      { path: '/404', element: <Navigate to="/404" /> },
      { path: '*', element: <div>not found</div> }
    ]
  }
    
];

export default routes;

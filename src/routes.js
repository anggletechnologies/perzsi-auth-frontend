import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const AuthLayout = lazy(() => import('./components/layouts/AuthLayout'));
const MainLayout = lazy(() => import('./components/layouts/MainLayout'));
const ConfirmEmail = lazy(() => import('./pages/ConfirmEmail'));
const Login = lazy(() => import('./pages/Login'));
const Logout = lazy(() => import('./pages/Logout'));
const NewPassword = lazy(() => import('./pages/NewPassword'));
const Register = lazy(() => import('./pages/Register'));
const ResetPassword = lazy(() => import('./pages/ResetPassword'));
const EmailSentConfirm = lazy(() => import('./pages/EmailSentConfirm'));


const routes = [
   
  {
    path: '/account/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'logout', element: <Logout /> },
      { path: 'register', element: <Register /> },
      { path: 'reset-password', element: <ResetPassword /> },
      { path: 'new-password', element: <NewPassword /> },
      { path: 'confirm-email', element: <ConfirmEmail /> },
      { path: 'email-sent-confirm', element: <EmailSentConfirm /> },
      
      { path: '*', element: <Navigate to="/" /> }
    ]
  },
  // { path: '*', element: <Navigate to="/auth/login" /> },
  // { path: '/404', element: <div>not found</div> }
    
];

export default routes;


import { Suspense, lazy } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from './ErrorBoundary/ErrorBoundary'
import NotFound from './ErrorBoundary/404'

import FallBack from './FallBack/FallBack';
const Login = lazy(() => import('./Login/Login'));
const Show = lazy(() => import('./Show/Show'));
const Register = lazy(() => import('./Register/Register'));
const PasswordReset = lazy(() => import('./ForgetPassword/ForgetPassword'));


export default function Router ()
{
    return (
<BrowserRouter>
  <Suspense fallback={<FallBack/>}>
          <Routes>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/' element={<Login />} errorElement={ <Error/>} />
            <Route path='/home' element={<Show />} errorElement={ <Error/>} />
            <Route path='/register' element={<Register />}  errorElement={ <Error/>}  />
            <Route path='/resetpassword' element={<PasswordReset/>} errorElement={ <Error/>}/>
    </Routes>
  </Suspense>
</BrowserRouter>

    )
}

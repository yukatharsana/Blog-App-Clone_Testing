
import { Suspense, lazy } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FallBack from './FallBack';
const Login = lazy(() => import('./Login/Login'));

export default function Router ()
{
    return (
<BrowserRouter>
  <Suspense fallback={<FallBack/>}>
    <Routes>
      <Route path='/' element={<Login />
} />

    </Routes>
  </Suspense>
</BrowserRouter>

    )
}

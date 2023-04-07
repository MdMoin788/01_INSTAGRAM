import React from 'react'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import App from '../App'
import { AuthPage } from '../AuthPage/AuthPage'
import { ErrorsPage } from './Errors/ErrorsPage'
import { PrivateRoutes } from './PrivateRoutes'

const AppRoutes = () => {

  const {token} = JSON.parse(localStorage.getItem("user"))  || "";
  // console.log('token', token);

  return (
    <BrowserRouter >
      <Routes>
        <Route element={<App />}>
          <Route path='error/*' element={<ErrorsPage />} />
          {/* <Route path='logout' element={<Logout />} /> */}
          {token ? (
            <>
              <Route path='/*' element={<PrivateRoutes />} />
              <Route index element={<Navigate to='/dashboard' />} />
            </>
          ) : (
            <>
              <Route path='auth/*' element={<AuthPage />} />
              <Route path='*' element={<Navigate to='/auth' />} />

            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes

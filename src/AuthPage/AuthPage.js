import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import AuthLayout from "./Authentication/AuthLayout.jsx"
import Login from "./Authentication/Login.jsx"

const AuthRenderChildInParent = () => {
  return <Outlet />
}
const AuthPage = () => (
  <Routes>
    <Route element={<AuthRenderChildInParent />}>
      <Route index element={<AuthLayout />} />

      {/* <Route path='/register' element={<Login />} />
      <Route path='/login' element={<Login />} /> */}
      {/* <Route path='forgot-password' element={<ForgotPassword />} /> */}
      {/* <Route path='*' element={<Navigate to='/error/404' />} /> */}

    </Route>
  </Routes>
)

export { AuthPage }
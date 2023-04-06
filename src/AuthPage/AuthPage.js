import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import AuthLayout from "./Authentication/AuthLayout.jsx"

const AuthRenderChildInParent = () => {
  return <Outlet />
}
const AuthPage = () => (
  <Routes>
    <Route element={<AuthRenderChildInParent />}>
      <Route index element={<AuthLayout />} />

      {/* <Route path='registration' element={<Registration />} /> */}
      {/* <Route path='forgot-password' element={<ForgotPassword />} /> */}
      <Route path='*' element={<Navigate to='/error/404' />} />

    </Route>
  </Routes>
)

export { AuthPage }
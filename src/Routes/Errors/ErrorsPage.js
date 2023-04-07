import {Route, Routes, Outlet} from 'react-router-dom'
import { Error404 } from './Error404'
import { Error500 } from './Error500'


const ErrorsLayout = () => {
  return <Outlet />
}

const ErrorsPage = () => (
  <Routes>
    <Route element={<ErrorsLayout />}>
      {/* <Route path='404' element={<Error404 />} />
      <Route path='500' element={<Error500 />} /> */}
      <Route index element={<Error404 />} />
    </Route>
  </Routes>
)

export {ErrorsPage}

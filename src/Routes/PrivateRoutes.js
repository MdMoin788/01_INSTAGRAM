import { Route, Routes, Navigate } from 'react-router-dom'
import Dashboard from '../Dashboard'
const PrivateRoutes = () => {
    // const ProfilePage = lazy(() => import('../SwapChildRoutes/ProfilePage'))
    return (    
        <Routes>
            {/* element={<MasterLayout />} */}
            <Route   >
                {/* Redirect to Dashboard after success login/registartion */}
                <Route path='/dashboard' index element={<Dashboard />} />
                {/* <Route
                    path='/themes*'
                    element={
                        <ProfilePage />
                    }
                /> */}
                <Route path='*' element={<Navigate to='/error/404' />} />
            </Route>
        </Routes>
    )
}

export { PrivateRoutes }





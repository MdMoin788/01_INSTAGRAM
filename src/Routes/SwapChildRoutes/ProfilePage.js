import { Navigate, Outlet, Route, Routes } from "react-router-dom"
import Login from "../../AuthPage/Authentication/Login.jsx"

const ProfilePage = () => (
    <Routes>
      <Route
        element={
          <>
            {/* <ProfileHeader /> */}
            <Outlet />
          </>
        }
      >
        <Route
          path='overview'
          element={
            <>
              {/* <PageTitle breadcrumbs={profileBreadCrumbs}>Overview</PageTitle> */}
              <Login />
            </>
          }
        />
        <Route
          path='projects'
          element={
            <>
              {/* <PageTitle breadcrumbs={profileBreadCrumbs}>Projects</PageTitle> */}
              {/* <Projects /> */}
            </>
          }
        />
        <Route
          path='campaigns'
          element={
            <>
              {/* <PageTitle breadcrumbs={profileBreadCrumbs}>Campaigns</PageTitle> */}
              {/* <Campaigns /> */}
            </>
          }
        />
        <Route
          path='documents'
          element={
            <>
              {/* <PageTitle breadcrumbs={profileBreadCrumbs}>Documents</PageTitle> */}
              {/* <Documents /> */}
            </>
          }
        />
        <Route
          path='connections'
          element={
            <>
              {/* <PageTitle breadcrumbs={profileBreadCrumbs}>Connections</PageTitle> */}
              {/* <Connections /> */}
            </>
          }
        />
        <Route index element={<Navigate to='themes/overview' />} />
      </Route>
    </Routes>
  )
  
  export default ProfilePage
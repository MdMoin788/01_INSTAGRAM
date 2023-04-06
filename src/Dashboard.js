import React from 'react'
import Navigation from './Components/Home/Navigation'
import Body from './Components/Home/Body'
import "./Styles/Dashboard.css"
const Dashboard = () => {
  return (
    <div className=' p-4 parent' >
      <div>
        <div className='py-4 sidebar' >
          <Navigation />
        </div>
      </div>
      <div className='p-1 body' >
        <Body />
      </div>
    </div>
  )
}
export default Dashboard

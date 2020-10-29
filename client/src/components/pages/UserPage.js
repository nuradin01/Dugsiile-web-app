import React from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import User from '../user/User'
const UserPage = () => {
    return (
        <div>
          <Header/>
          <Sidebar/>  
          <User />
        </div>
    )
}

export default UserPage

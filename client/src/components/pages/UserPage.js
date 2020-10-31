import React, {useEffect} from 'react'
import Header from '../layout/Header'
import Sidebar from '../layout/Sidebar'
import User from '../user/User'
import Loader from '../students/Loader'
import {connect} from 'react-redux'

import {loadUser} from '../../actions/userActions'

const UserPage = ({loadUser, userState:{loading, user}}) => {
  useEffect(() => {
    loadUser()
     // eslint-disable-next-line 
  }, [])  

  
  if (loading || user === null || user==={}) {
    return <Loader />;
  }
    return (
        <div>
          <Header/>
          <Sidebar/>  
          <User />
        </div>
    )
}
const mapStateToProps =(state) => ({
  userState: state.userState
})

export default connect(mapStateToProps, {loadUser})(UserPage)

import React, {useEffect} from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Dashboard from '../dashboard/Dashboard';
import Loader from '../students/Loader'
import {connect} from 'react-redux'

import {loadUser} from '../../actions/userActions'

const Home = ({loadUser, history,userState:{loading, user}}) => {
  useEffect(() => {
    loadUser()
     // eslint-disable-next-line 
  }, [])  

  
  if (loading || user === null || user==={}) {
    return <Loader />;
  }

  if(!user.isRegisteredSchool) {
    history.push('/school');
  }
  
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
    </>
  );
};

const mapStateToProps =(state) => ({
  userState: state.userState
})

export default connect(mapStateToProps, {loadUser})(Home);

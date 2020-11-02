import React, {useEffect} from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import StudentDetails from '../students/StudentDetails';
import {connect} from 'react-redux'
import Loader from '../students/Loader'
import { loadUser } from '../../actions/userActions';


const Details = ({loadUser, userState:{loading, user}}) => {
  useEffect(() => {
    loadUser()
     // eslint-disable-next-line 
  }, [])  

  if (loading || user === null || user==={}) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <Sidebar />
      <StudentDetails />
    </>
  );
};
const mapStateToProps =(state) => ({
  userState: state.userState
})
export default connect(mapStateToProps, {loadUser})(Details);

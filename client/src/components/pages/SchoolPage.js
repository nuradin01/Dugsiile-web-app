import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import School from '../school/School';
import Loader from '../students/Loader'
import PropTypes from 'prop-types'

import {loadUser} from '../../actions/userActions'


const SchoolPage = ({userState: {loading, user}, loadUser}) => {
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
      <School />
    </>
  );
};
SchoolPage.propTypes = {
  loadUser: PropTypes.func,
  loading: PropTypes.bool,
}
const mapStateToProps =(state) => ({
  userState: state.userState
})
export default connect(mapStateToProps, {loadUser})(SchoolPage);

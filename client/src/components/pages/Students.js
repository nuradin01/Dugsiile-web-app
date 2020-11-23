import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Students from '../students/Students';
import Loader from '../students/Loader'

import {loadUser} from '../../actions/userActions'

const StudentsList = ({userState: {loading, user}, loadUser, history}) => {
  useEffect(() => {
    const script10 = document.createElement('script');
    script10.src = 'js/custom/dataTable.js';
    script10.async = true;
    document.body.appendChild(script10);

    loadUser()
    // eslint-disable-next-line
  }, []);

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
      <Students />
    </>
  );
};
const mapStateToProps =(state) => ({
  userState: state.userState
})
export default connect(mapStateToProps, {loadUser}) (StudentsList);

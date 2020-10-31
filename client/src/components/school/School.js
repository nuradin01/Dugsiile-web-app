import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import SchoolForm from './SchoolForm';
import {connect} from 'react-redux'
import SchoolCard from './SchoolCard';

const School = ({userState: {user}}) => {
  const [showForm, setShowForm] = useState(false)

  
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>
            <i className="fa fa-th-list" /> &nbsp; {user.isRegisteredSchool ? 'Your school' : 'Register Your School'}
          </h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item">
            <i className="fa fa-home fa-lg" />
          </li>

          <li className="breadcrumb-item active">
            <Link to="/school">School </Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
          {user.isRegisteredSchool &&
          <div className="tile-title-w-btn">
        <h3 className="title"> {user.school} </h3>
        <div className="btn-group">
          <a className="btn btn-outline-warning" href="#!" onClick={() => setShowForm(true)}>
            <i className="fa fa-lg fa-edit"></i>
            Edit
          </a>
        </div>
      </div>
}
            <div className="tile-body ">
              {!user.isRegisteredSchool || showForm ? <SchoolForm showForm={showForm} setShowForm={setShowForm}/>  : <SchoolCard user={user}  />}
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
 
  userState: state.userState,
});

export default connect(mapStateToProps)(School);

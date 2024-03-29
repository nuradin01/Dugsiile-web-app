import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getStudents, chargeAllPaidStudents } from '../../actions/studentActions';
import swal from 'sweetalert';
import Student from './Student';
import AddModal from './AddModal';
import Loader from './Loader';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Students = ({
  studentsState: { students, loading, error },
  userState: {user },
  getStudents,chargeAllPaidStudents
}) => {
  const {isRegisteredSchool, schoolSubjects} = user
  useEffect(() => {
    getStudents();

    // eslint-disable-next-line
  }, []);
if (error) {
  toast.error(error, {
    hideProgressBar: true,
  });
}
  if (loading) {
    return <Loader />;
  }

  const chargeAll = () => {
    swal({
      title: 'Are you sure?',
      text: ` You are charging all paid students`,
      icon: 'warning',
      buttons: [true, 'Yes'],
    }).then((willDelete) => {
      if (willDelete) {
        
        chargeAllPaidStudents();
      }
    });
  }
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>
            <i className="fa fa-th-list" /> &nbsp; Students
          </h1>
          <p>List of all students</p>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item">
            <i className="fa fa-home fa-lg" />
          </li>

          <li className="breadcrumb-item active">
            <Link to="/students">Students Table</Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body ">
              {students.length > 0 &&
            <button
                className="btn btn-outline-info pull-right ml-1"
                type="button"
               onClick={chargeAll}
              >
                <i className="fa fa-dollar" />
                Charge All
              </button>
              }
              <button
                className="btn btn-outline-primary pull-right ml-5"
                type="button"
                data-toggle="modal"
                data-target="#add-student-modal"
              >
                <i className="fa fa-user-plus" />
                Add Student
              </button>
              

              <table
                className="table table-hover table-bordered "
                id="sampleTable"
              >
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Parent</th>
                    <th>Phone</th>
                    <th>Fee</th>
                    <th>Paid</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  {!loading && students.length === 0 && students !== null ? (
                    <tr>
                      <td align="center" colSpan="6">
                        
                        You have not registered any students yet!
                      </td>
                    </tr>
                  ) : (
                    students.map((student, index) => (
                      <Student key={student._id} student={student} index={index} />
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Add Student Modal */}
      <AddModal
        isRegisteredSchool={isRegisteredSchool}
        schoolSubjects={schoolSubjects}
      />

     
    </main>
  );
};
Students.propTypes = {
  students: PropTypes.array,
  getStudents: PropTypes.func.isRequired,
  chargeAllPaidStudents: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  studentsState: state.studentsState,
  userState: state.userState,
});

export default connect(mapStateToProps, { getStudents, chargeAllPaidStudents })(Students);

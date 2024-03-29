import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  deleteStudent,
  clearCurrent,
  receivePayment,
  chargeStudent
} from '../../actions/studentActions';
import EditModal from './EditModal';
import CustomPaymentModal from './CustomPaymentModal';

const StudentDetails = ({
  current,
  deleteStudent,
  clearCurrent,
  receivePayment,
  chargeStudent
}) => {
  useEffect(() => {
    return () => {
      clearCurrent();
    };
    // eslint-disable-next-line
  }, []);
  if (!current) {
    return <Redirect to="/students" />;
  }
  const onDelete = () => {
    swal({
      title: 'Are you sure?',
      text: ` You will not be able to recover ${current.studentName}!`,
      icon: 'warning',
      buttons: [true, 'Yes, delete it!'],

      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteStudent(current._id);
        clearCurrent();
        swal(` ${current.name} has been deleted!`);
      }
    });
  };
  const onReceive = (e) => {
    e.preventDefault();
    swal({
      title: 'Are you sure?',
      text: ` You are receiving fee from ${current.name}!`,
      icon: 'success',
      buttons: [true, 'Yes'],
    }).then((willDelete) => {
      if (willDelete) {
        const payment = {
          id: current._id,
          amountPaid: current.fees[0].amountCharged,
          message: 'Fully Paid',
          isPaid: true,
          paidAt: new Date().toISOString(),
        };
        receivePayment(payment);
      }
    });
  };
  const chargeSingleStudent = (e) => {
    e.preventDefault();
    swal({
      title: 'Are you sure?',
      text: ` You are charging $${current.fee} as a fee to ${current.name}!`,
      icon: 'warning',
      buttons: [true, 'Yes'],
    }).then((willDelete) => {
      if (willDelete) {
       
        chargeStudent(current._id);
      }
    });
  };
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>
            <i className="fa fa-th-list" /> Student Details
          </h1>
        </div>
        <ul className="app-breadcrumb breadcrumb side">
          <li className="breadcrumb-item">
            <i className="fa fa-home fa-lg" />
          </li>

          <li className="breadcrumb-item ">
            <Link to="/students">Students</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to="/student-details">Students Details</Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-title-w-btn">
              <h3 className="title"> {current.name} </h3>
              <div className="btn-group">
                <a
                  className="btn btn-outline-warning"
                  href="#!"
                  data-toggle="modal"
                  data-target="#edit-student-modal"
                >
                  <i className="fa fa-lg fa-edit"></i>
                  Edit
                </a>
                <Link
                  className="btn btn-outline-danger"
                  to="#"
                  onClick={onDelete}
                >
                  <i className="fa fa-lg fa-trash"></i>
                  Delete
                </Link>
                {!current.isScholarship && 
                <>
                <Link className="btn btn-outline-info" href="#" onClick={chargeSingleStudent}>
                  <i className="fa fa-lg fa-dollar"></i>
                  Charge
                </Link>
                <Link
                  className="btn btn-outline-primary"
                  to="#"
                  onClick={onReceive}
                >
                  <i className="fa fa-lg fa-dollar"></i>
                  Paid
                </Link>
                <div className="btn-group" role="group">
                  <button
                    className="btn btn-outline-primary dropdown-toggle"
                    id="btnGroupDrop1"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  />
                  <div className="dropdown-menu dropdown-menu-right">
                    <Link
                      className="dropdown-item"
                      href="#!"
                      data-toggle="modal"
                      data-target="#custom-payment-modal"
                    >
                      Custom Payment
                    </Link>
                  </div>
                </div>
                </>
                }
              </div>
            </div>
            <div className="tile-body">
              <div className="row">
                <div className="col-md-4">
                  <h5>Personal Information</h5>
                  <p>
                    <strong>Parent Name: &nbsp; </strong> {current.parentName}
                  </p>
                  <p>
                    <strong>Parent`s Phone: &nbsp;</strong>{' '}
                    {current.parentPhone ? current.parentPhone : 'N/A'}
                  </p>
                  <p>
                    <strong>Students`s Phone: &nbsp;</strong>{' '}
                    {current.studentPhone ? current.studentPhone : 'N/A'}
                  </p>
                  <p>
                    <strong>Gender: &nbsp;</strong> {current.gender}
                  </p>
                  <p>
                    <strong>Joined: &nbsp;</strong>{' '}
                    <Moment format="DD - MMMM - YYYY">{current.joinedAt}</Moment>
                  </p>
                </div>
                <div className="col-md-3">
                  <h5>Subjects</h5>
                  {current.studentSubjects.map((subject, index) => (
                    <span key={index}>
                  {index+1 } .   {subject} <br />
                    </span>
                  ))}
                </div>
                {current.fees.length > 0 && (
                  <div className="col-md-5">
                    <h5>Unpaid Fees</h5>
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Month</th>
                          <th scope="col">Balance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {current.fees.map((eachMonth, index) => (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              {
                                <Moment format="MMMM - YYYY">
                                  {eachMonth.chargedAt}
                                </Moment>
                              }
                            </td>
                            <td>{eachMonth.balance}</td>
                          </tr>
                        ))}
                        <tr>
                          <td colSpan="2">Total Balance</td>
                          <th scope="row">
                            {current.fees.reduce(
                              (total, fee) => total + fee.balance,
                              0
                            )}
                          </th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <EditModal current={current} />
      {/* Custom Payment Modal */}
      <CustomPaymentModal />
    </main>
  );
};
StudentDetails.propTypes = {
  current: PropTypes.object,
};
const mapStateToProps = (state) => ({
  current: state.studentsState.current,
});
export default connect(mapStateToProps, {
  deleteStudent,
  clearCurrent,
  receivePayment,
  chargeStudent
})(StudentDetails);

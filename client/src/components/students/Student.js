import React from 'react';
import { connect } from 'react-redux';
import { setCurrent } from '../../actions/studentActions';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
const Student = ({ student, setCurrent }) => {
  const {
    name,
    parentName,
    parentPhone,
    fee,
    isScholarship,
    isPaid,
  } = student;

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{parentName}</td>
        <td>{parentPhone ? parentPhone : 'N/A'}</td>
        <td>{fee}</td>
        <td>
          {!isPaid  && !isScholarship ? (
            <i className="fa fa-times fa-2x  text-danger"></i>
          ) : (
            <i className="fa fa-check fa-2x text-primary" />
          )}
        </td>
        <td>
          <div
            className="btn-group"
            role="group"
            aria-label="Button group with nested dropdown"
          >
            <Link className="btn btn-primary" type="button"  to="/student-details"
                  onClick={() => setCurrent(student)}>
              Details
            </Link>
            
          </div>
        </td>
       
      </tr>
    </>
  );
};

Student.propTypes = {
  setCurrent: PropTypes.func,
  student: PropTypes.object.isRequired,
};

export default connect(null, { setCurrent })(Student);

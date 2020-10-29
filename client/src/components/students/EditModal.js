import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { updateStudent, setCurrent } from '../../actions/studentActions';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();
const EditModal = ({ current, updateStudent, setCurrent }) => {
  useEffect(() => {
    setStudent(current);
    // eslint-disable-next-line
  }, []);

  const [student, setStudent] = useState({
    studentName: '',
    parentName: '',
    parentPhone: '',
    studentPhone: '',
    gender: '',
    fee: '',
    isPaid: 0,
    joined: new Date(),
  });

const [isScholarship, setIsScholarship] = useState(false)

  const { studentName, parentName, parentPhone, studentPhone, fee, } = student;
  const onChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedStudent = { ...student, id: current.id, isScholarship };
    updateStudent(updatedStudent);
    setCurrent(updatedStudent);
    toast.success(`${updatedStudent.studentName} was updated successfully`, {
      hideProgressBar: true,
    });
  };

  return (
    <div
      className="modal fade"
      id="edit-student-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="add-student-modal">
              Edit Student
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <form className="row">
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="updateName">
                  Name{' '}
                </label>
                <input
                  className="form-control"
                  id="updateName"
                  name="studentName"
                  value={studentName}
                  type="text"
                  placeholder="enter full name"
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="updateParentName">
                  Parent Name
                </label>
                <input
                  className="form-control"
                  id="updateParentName"
                  name="parentName"
                  value={parentName}
                  type="text"
                  placeholder="enter parent name"
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="updateParentPhone">
                  Parent Phone{' '}
                </label>
                <input
                  className="form-control"
                  id="updateParentPhone"
                  name="parentPhone"
                  value={parentPhone}
                  type="text"
                  placeholder="enter parent phone number"
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="updateStudentPhone">
                  Student Phone{' '}
                </label>
                <input
                  className="form-control"
                  id="updateStudentPhone"
                  name="studentPhone"
                  value={studentPhone}
                  type="text"
                  placeholder="enter student phone number"
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="updateFee">
                  Fee{' '}
                </label>
                <input
                  className="form-control"
                  id="updateFee"
                  name="fee"
                  value={fee}
                  type="number"
                  placeholder="enter amount in dollar "
                  onChange={onChange}
                />
              </div>
              {/* <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="updateBalance">
                  Balance{' '}
                </label>
                <input
                  className="form-control"
                  id="updateBalance"
                  type="number"
                  placeholder=" enter balance  amount in dollar "
                />
              </div> */}
              <div className="form-group col-md-6">
                <label className="control-label">Gender</label>
                <select
                  className="form-control"
                  defaultValue={'DEFAULT'}
                  name="gender"
                  onChange={onChange}
                >
                  <option value="DEFAULT" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
              <div className="animated-checkbox form-group ml-3">
              <label>
                <input type="checkbox" name='isScholarship' value={isScholarship} onChange={() => setIsScholarship(!isScholarship)} /><span className="label-text"
                  >Scholarship</span>
              </label>
            </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={onSubmit}
              data-dismiss="modal"
            >
              {' '}
              <i className="fa fa-edit" />
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { updateStudent, setCurrent })(EditModal);

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select';

import { addStudent } from '../../actions/studentActions';

toast.configure();

const AddModal = ({ isRegisteredSchool, schoolSubjects, addStudent }) => {
  useEffect(() => {
    if (!isRegisteredSchool) {
      toast.error('You have not registered your school yet', {
        autoClose: 50000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  });
  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: '#00968880',
        primary: '#009688',
      },
    };
  };

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

  const [studentSubjects, setStudentSubjects] = useState([]);
  const [isScholarship, setIsScholarship] = useState(false)

  const { studentName, parentName, parentPhone, studentPhone, fee } = student;

  const onChange = (e) =>
    setStudent({ ...student, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      name: studentName, parentName, parentPhone, studentPhone, fee, isScholarship, studentSubjects: studentSubjects.map(subject => subject.value), gender: student.gender
    }
   
    addStudent(newStudent);
    setStudent({
      studentName: '',
      parentName: '',
      parentPhone: '',
      studentPhone: '',

      gender: '',
      fee: '',
      isPaid: 0,
    
      joined: new Date(),
    });
    toast.success(`${studentName} was added as a student`, {
      hideProgressBar: true,
    });
  };

  return (
    <div
      className="modal fade"
      id="add-student-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog  modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="add-student-modal">
              Register Student
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
            <form className="row" onSubmit={onSubmit}>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="name">
                  Name{' '}
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="studentName"
                  value={studentName}
                  placeholder="enter full name"
                  required
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="parentName">
                  Parent Name
                </label>
                <input
                  className="form-control"
                  id="parentName"
                  type="text"
                  name="parentName"
                  value={parentName}
                  placeholder="enter parent name"
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="parentPhone">
                  Parent Phone{' '}
                </label>
                <input
                  className="form-control"
                  id="parentPhone"
                  type="text"
                  name="parentPhone"
                  value={parentPhone}
                  placeholder="enter parent phone number"
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="studentPhone">
                  Student Phone{' '}
                </label>
                <input
                  className="form-control"
                  id="studentPhone"
                  type="text"
                  name="studentPhone"
                  value={studentPhone}
                  placeholder="enter student phone number"
                  onChange={onChange}
                />
              </div>
              <div className="form-group col-md-6">
                <label className="col-form-label" htmlFor="fee">
                  Fee{' '}
                </label>
                <input
                  className="form-control"
                  id="fee"
                  type="number"
                  name="fee"
                  value={fee}
                  placeholder="enter amount in dollar "
                  onChange={onChange}
                />
              </div>
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
              <div className="form-group col-md-12">
                <Select
                  theme={customTheme}
                  options={schoolSubjects.map((subject) => {
                    return { value: subject, label: subject };
                  })}
                  isMulti
                  placeholder="Select subjects"
                  isSearchable
                  noOptionsMessage={() =>
                    'Please register subjects you teach first'
                  }
                  onChange={setStudentSubjects}
                />
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
              type="submit"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary "
              id="demoNotify"
              onClick={onSubmit}
              data-dismiss="modal"
            >
              {' '}
              <i className="fa fa-user-plus" />
              Add Student
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addStudent })(AddModal);

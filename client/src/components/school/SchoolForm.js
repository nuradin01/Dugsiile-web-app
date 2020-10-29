import React, { useState, Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerSchool } from '../../actions/userActions';

const SchoolForm = ({ registerSchool, userState, showForm, setShowForm } ) => {
  // Dynamic subject fields array
  const [subjectFields, setSubjectFields] = useState([
    {
      subject: '',
    },
  ]);
  // adding new field
  const handleAddFields = () => {
    setSubjectFields([...subjectFields, { subject: '' }]);
  };

  // School state
  const [school, setSchool] = useState('');

  // handle school subjects state
  const handleChangeSubjects = (index, event) => {
    const values = [...subjectFields];
    values[index][event.target.name] = event.target.value;
    setSubjectFields(values);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    registerSchool(school, subjectFields);
    setSchool('');
    setShowForm(false)
  };

  useEffect(() => {
    if (showForm){
      setSchool(userState.school)
    
        setSubjectFields(userState.schoolSubjects)

      
    }
    
  }, [showForm, userState.school,userState.schoolSubjects])
  return (
    <>
      <form className="row" onSubmit={onSubmit}>
        <div className="form-group col-md-8">
          <label className="col-form-label" htmlFor="school">
            School Name{' '}
          </label>
          <input
            className="form-control"
            id="school"
            type="text"
            name="school"
            value={school}
            placeholder="enter your school "
            required
            onChange={(e) => setSchool(e.target.value)}
          />
        </div>

        {subjectFields.map((subjectField, index) => {
          return (
            <Fragment key={index}>
              <div className="form-group col-md-8">
                <label className="col-form-label" htmlFor="subject">
                Subject Name
                </label>
                <input
                  className="form-control"
                  id="subject"
                  type="text"
                  name="subject"
                  value={subjectFields.subject}
                  placeholder="enter subject you teach"
                  onChange={(event) => handleChangeSubjects(index, event)}
                  required
                />
              </div>
              <div className="form-group btn-group col-md-2 align-self-end">
                <button
                  className="btn btn-outline-primary"
                  type="button"
                  onClick={handleAddFields}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </Fragment>
          );
        })}
        <div className="form-group col-md-8">
          <button className="btn btn-primary" type="submit">
            <i className="fa fa-check"></i>
            Register
          </button>
        </div>
      </form>
    </>
  );
};

SchoolForm.propTypes = {
  registerSchool: PropTypes.func.isRequired,
  urerState: PropTypes.array,
};
const mapStateToProps = (state) => ({
  userState: state.userState
})
export default connect(mapStateToProps, { registerSchool })(SchoolForm);

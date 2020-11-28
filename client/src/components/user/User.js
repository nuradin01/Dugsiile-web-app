import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/userActions';
import PropTypes from 'prop-types';
import Select from 'react-select';


const User = ({ userState: { user, school }, updateUser }) => {
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
  const genderOptions = ['Male', 'Female']
  const [gender, setGender] = useState('');

  const [editUser, setEditUser] = useState({
    name: '',
    email: '',
  });

  const [editForm, setShowEditForm] = useState(false);

  useEffect(() => {
    setEditUser(user);
  }, [user]);

  const { name, email } = editUser;

  const onChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updateUser({...editUser, gender: gender.value ? gender.value : user.gender});
    setShowEditForm(false);
  };

  return (
    <main className="app-content">
      <div className="row user">
        <div className="col-md-4 offset-4  mb-3 mt-2">
          <div className="profile">
            <div className="info">
              <img className="user-img" src="rsz_avatar.png" alt="user" />
              <h4>{user.name}</h4>
              <p>{school}</p>
              {editForm && (
                <label className="btn btn-primary">
                  {' '}
                  Upload
                  <input type="file" hidden />{' '}
                </label>
              )}
            </div>
          </div>
        </div>
        {!editForm ? (
          <div className="col-md-12">
            <div className="tile">
              <div className="tile-title-w-btn">
                <h3 className="title"> Personal Information </h3>

                <div className="btn-group">
                  <a
                    className="btn btn-outline-warning"
                    href="#!"
                    onClick={() => setShowEditForm(!editForm)}
                  >
                    <i className="fa fa-lg fa-edit"></i>
                    Edit
                  </a>
                </div>
              </div>
              <div className="tile-body">
                <div className="row">
                  <div className="col-md-6">
                    <p>
                      <strong>Name: &nbsp; </strong> {user.name}
                    </p>
                    <p>
                      <strong>Email: &nbsp; </strong> {user.email}
                    </p>
                    <p>
                      <strong>Gender: &nbsp;</strong>
                      {user.gender}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="col-md-12">
            <div className="tile">
              <div className="tile-title-w-btn">
                <h3 className="title"> Edit your profile </h3>
              </div>
              <div className="tile-body">
                <form className="row" onSubmit={onSubmit}>
                  <div className="form-group col-md-8">
                    <label className="col-form-label" htmlFor="name">
                      Name{' '}
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="enter your school "
                      value={name}
                      onChange={onChange}
                      required
                    />
                  </div>
                  <div className="form-group col-md-8">
                    <label className="col-form-label" htmlFor="email">
                      email{' '}
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="text"
                      name="email"
                      placeholder="enter your school "
                      value={email}
                      onChange={onChange}
                      required
                    
                    />
                  </div>

                  <div className="form-group col-md-8">
                    <label className="control-label">Gender</label>
                    <Select
                  theme={customTheme}
                  options={genderOptions.map((gender) => {
                    return { value: gender, label: gender};
                  })}
                
                  placeholder="Select Gender"
                  isSearchable
                 
                  onChange={setGender}
                />
                  </div>

                  <div className="form-group col-md-8">
                    <button className="btn btn-primary" type="submit">
                      <i className="fa fa-check"></i>
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

User.propTypes = {
user: PropTypes.object,
updateUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  userState: state.userState,
});
export default connect(mapStateToProps, {updateUser})(User);

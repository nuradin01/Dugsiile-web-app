import React from 'react';

const SchoolCard = ({
  userState: { isRegisteredSchool, user, schoolSubjects, school }
}) => {


  return (
 
      
      <div className="row">
        <div className="col-md-6">
          <h5>School Information</h5>
          <p>
            <strong>Owner: &nbsp;</strong> {user.name}
          </p>

          <p>
            <strong>Subjects: &nbsp;</strong> <br />
            {schoolSubjects &&
              schoolSubjects.map((schoolSubject, index) => (
                <span key={index}>
                  {`${index + 1} . ${schoolSubject.subject}`} <br />
                </span>
              ))}
          </p>
        </div>
      </div>
 
  );
};

export default SchoolCard;

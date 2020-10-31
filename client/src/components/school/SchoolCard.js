import React from 'react';

const SchoolCard = ({
  user: { isRegisteredSchool, name, schoolSubjects, school }
}) => {


  return (
 
      
      <div className="row">
        <div className="col-md-6">
          <h5>School Information</h5>
          <p>
            <strong>Owner: &nbsp;</strong> {name}
          </p>

          <p>
            <strong>Subjects: &nbsp;</strong> <br />
            {schoolSubjects &&
              schoolSubjects.map((schoolSubject, index) => (
                <span key={index}>
                  {`${index + 1} . ${schoolSubject}`} <br />
                </span>
              ))}
          </p>
        </div>
      </div>
 
  );
};

export default SchoolCard;

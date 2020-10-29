import React from 'react';
import { connect } from 'react-redux';
const DetailsModal = ({ current }) => {
  const { studentName, parentName, parentPhone, fee, status } = current;
  return (
    <div
      className="modal fade"
      id="details-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              {studentName}
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
            <p>
              <strong>Parent Name: &nbsp; </strong> {parentName}
            </p>
            <p>
              <strong>Parent`s Phone: &nbsp;</strong> {parentPhone}
            </p>
            <p>
              <strong>Students`s Phone: &nbsp;</strong> 8765
            </p>
            <p>
              <strong>Gender: &nbsp;</strong> male
            </p>
            <p>
              <strong>Joined: &nbsp;</strong> 01-01-2020
            </p>
            <p>
              <strong>Balance:&nbsp;</strong> <br /> Last month : $0 <br />{' '}
              Older months: $1
            </p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" data-dismiss="modal">
              {' '}
              Close
            </button>
            <button
              className="btn btn-warning"
              href="#!"
              data-toggle="modal"
              data-target="#edit-student-modal"
            >
              <i className="fa fa-lg fa-edit" />
              Edit
            </button>
            <button className="btn btn-danger" href="#!">
              <i className="fa fa-lg fa-trash" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null)(DetailsModal);

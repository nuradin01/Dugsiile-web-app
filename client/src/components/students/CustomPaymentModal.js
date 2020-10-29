import React from 'react';

const CustomPaymentModal = () => {
  return (
    <div
      className="modal fade"
      id="custom-payment-modal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">
              Custom Payment
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
            <form>
              <div className="form-group">
                <label
                  className="col-form-label"
                  htmlFor="customPaymentMessage"
                >
                  Message{' '}
                </label>
                <input
                  className="form-control"
                  id="customPaymentMessage"
                  type="text"
                  placeholder="enter message "
                />
              </div>
              <div className="form-group">
                <label className="col-form-label" htmlFor="customPayment">
                  Amount{' '}
                </label>
                <input
                  className="form-control"
                  id="customPayment"
                  type="number"
                  placeholder="enter amount in dollar"
                />
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
            <button type="button" className="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomPaymentModal;

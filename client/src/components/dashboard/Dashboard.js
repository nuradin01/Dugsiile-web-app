import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getStudentsInfo} from '../../actions/studentActions'

const Dashboard = ({studentsState: {studentsTotal, newStudents, leftStudents}, getStudentsInfo}) => {
  useEffect(() => {
    const script11 = document.createElement('script');
    script11.src = 'js/custom/dashboard-charts.js';
    script11.async = true;
    document.body.appendChild(script11);

    getStudentsInfo()
    // eslint-disable-next-line
  }, []);
  return (
    <main className="app-content">
      <div className="app-title">
        <div>
          <h1>
            <i className="fa fa-dashboard" /> Dashboard
          </h1>
          <p>Quickly glance information about your school</p>
        </div>
        <ul className="app-breadcrumb breadcrumb">
          <li className="breadcrumb-item">
            <i className="fa fa-home fa-lg" />
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="row">
        <div className="col-md-6 col-lg-6">
          <div className="widget-small primary coloured-icon ">
            <i className="icon fa fa-users fa-3x" />
            <div className="info py-2 pr-1">
              <h3> Students </h3>
              <p>
               New:  <b>{newStudents? newStudents.length : 0}</b>
              </p>
              <p>
               Left: <b>{leftStudents? leftStudents.length : 0}</b>
              </p>
              <p>
              Total: <b>{studentsTotal ? studentsTotal : 0}</b> 
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-6">
          <div className="widget-small info coloured-icon">
            <i className="icon fa fa-dollar fa-3x" />
            <div className="info py-2 pr-1">
              <h3> Revenue</h3>
              
              <p>
                Estimated: <b>$300</b>
              </p>
              <p>
                In hand: <b>$250</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Paid and Unpaid Fees</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas
                className="embed-responsive-item"
                id="barChartDemo"
              ></canvas>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Subjects</h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas className="embed-responsive-item" id="pieChartDemo" />
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tile">
            <h3 className="tile-title">Demographics </h3>
            <div className="embed-responsive embed-responsive-16by9">
              <canvas
                className="embed-responsive-item"
                id="doughnutChartDemo"
              ></canvas>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  studentsState: state.studentsState,
});
export default connect(mapStateToProps, {getStudentsInfo})(Dashboard);

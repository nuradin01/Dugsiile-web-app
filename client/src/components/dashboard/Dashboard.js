import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import {getStudentsInfo, getFeesInfo, feesGraph, genderGraph} from '../../actions/studentActions'
import LineChart from './LineChart';
import PieChart from './PieChart';

const Dashboard = ({studentsState: {studentsTotal, newStudents, leftStudents, unpaidFees, paidFees}, studentsState, getStudentsInfo, getFeesInfo, feesGraph, genderGraph}) => {
  useEffect(() => {
    getStudentsInfo()
    getFeesInfo()
    feesGraph()
    genderGraph()
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
                Estimated: <b>${paidFees + unpaidFees}</b>
              </p>
              <p>
                In hand: <b>${paidFees}</b>
              </p>
              <p>
                Remaining: <b>${unpaidFees}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Fees received last 120 days</h3>
           
             <LineChart studentsState={studentsState} />
          </div>
        </div>
        <div className="col-md-12">
          <div className="tile">
            <h3 className="tile-title">Students Gender </h3>
            <PieChart studentsState={studentsState}/>
          </div>
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => ({
  studentsState: state.studentsState,
});
export default connect(mapStateToProps, {getStudentsInfo, getFeesInfo, feesGraph, genderGraph})(Dashboard);

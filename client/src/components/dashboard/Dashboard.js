import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
const Dashboard = () => {
  useEffect(() => {
    const script11 = document.createElement('script');
    script11.src = 'js/custom/dashboard-charts.js';
    script11.async = true;
    document.body.appendChild(script11);
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
        <div className="col-md-6 col-lg-3">
          <div className="widget-small primary coloured-icon">
            <i className="icon fa fa-users fa-3x" />
            <div className="info">
              <h4> <b>500 </b></h4>
              <p>
                Students
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small info coloured-icon">
            <i className="icon fa fa-arrow-circle-up fa-3x" />
            <div className="info">
              <h4> <b> 500 </b></h4>
              <p>
                New Students 
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3">
          <div className="widget-small danger coloured-icon">
            <i className="icon fa fa-sign-out fa-3x" />
            <div className="info mb-2">
              <h4> <b> 500</b></h4>
              <p>
                Students Left
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="widget-small info coloured-icon">
            <i className="icon fa fa-dollar fa-3x" />
            <div className="info mb-2">
              <h4> <b> $500 </b></h4>
              
              <p>
                Revenue
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

export default Dashboard;

import React from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Dashboard from '../dashboard/Dashboard';
const Home = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Dashboard />
    </>
  );
};

export default Home;

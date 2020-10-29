import React, { useEffect } from 'react';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
import Students from '../students/Students';
const StudentsList = () => {
  useEffect(() => {
    const script10 = document.createElement('script');
    script10.src = 'js/custom/dataTable.js';
    script10.async = true;
    document.body.appendChild(script10);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header />
      <Sidebar />
      <Students />
    </>
  );
};

export default StudentsList;

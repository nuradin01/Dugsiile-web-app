import React from 'react';
import Spinner from '../layout/Spinner.svg';
const Loader = () => {
  return (
    <div style={{ marginLeft: '40%', marginTop: '5%', display: 'block' }}>
      <img src={Spinner} alt="Loading" />
      <h3 style={{ marginLeft: '5%' }}>Loading...</h3>
    </div>
  );
};

export default Loader;

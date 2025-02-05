import React from 'react';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div className="spinner">Loading...</div>
  </div>
);

export default Loader; // Ensure this is the only export

import React from 'react';
import './centrifier.css';

/**
 * centrifier has css to display:flex,
 * justify-content:center its children
 */
const Centrifier = ({ children }) => {
  return (
    <div className="centrifier">
    {children}
  </div>
  )
}

export default Centrifier;
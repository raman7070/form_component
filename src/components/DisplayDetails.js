import React from 'react';

const DisplayDetails = ({ details }) => (
  <div>
    <h2>Form Details</h2>
    <p>First Name: {details.firstName}</p>
    <p>Last Name: {details.lastName}</p>
    <p>Email: {details.email}</p>
  </div>
);

export default DisplayDetails;

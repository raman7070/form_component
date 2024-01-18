import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import DisplayDetails from './components/DisplayDetails';
import './App.css'
const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="container">
      <h1>User Registration</h1>
      {!submittedData ? (
        <RegistrationForm onSubmit={handleFormSubmit} />
      ) : (
        <DisplayDetails details={submittedData} />
      )}
    </div>
  );
};

export default App;

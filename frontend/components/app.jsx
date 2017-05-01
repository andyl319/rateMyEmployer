import React from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <h1>Rate My Employer</h1>
    <GreetingContainer />
    {children}
  </div>
);

export default App;

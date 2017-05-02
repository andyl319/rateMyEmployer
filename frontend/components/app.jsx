import React from 'react';
import { Link } from 'react-router';

import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <GreetingContainer />
    <h1>Rate My Employer</h1>
    {children}
  </div>
);

export default App;

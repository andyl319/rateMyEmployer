import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search/search_bar';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div className="splash">
    <GreetingContainer />
    <h1 className="home-title">Rate My Employer</h1>
    <SearchBar/>
    {children}
  </div>
);

export default App;

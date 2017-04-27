import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
    let store;
    const root = document.getElementById('root');
    store = configureStore();
    window.store = store;
    // ReactDOM.render(<Root store={ store }/>, root);
    ReactDOM.render(<h1>Welcome to Rate My Employer</h1>, root);
});

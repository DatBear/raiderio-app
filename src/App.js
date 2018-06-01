import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home';

import store from './store';

export default () => (
  <Provider store={store}>
    <Router>
      <Home />
    </Router>
  </Provider>
);

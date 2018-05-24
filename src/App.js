import React from 'react';
import { Provider } from 'react-redux';
import './App.css';

import Home from './components/Home';

import store from './store';

export default () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

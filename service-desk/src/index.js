import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route } from 'react-router';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from "./dashboard"

ReactDOM.render((
  <Dashboard />
), document.getElementById('root'));


reportWebVitals();

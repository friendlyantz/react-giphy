import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../assets/stylesheets/application.scss';
import App from '../src/components/app.jsx'
// ======================


// ======================
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,

    root);
}

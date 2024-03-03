
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { BrowserRouter as Router } from 'react-router-dom';
import "./i18n"
// Style
import "./assets/scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <Router>
    <App />
  </Router>

);


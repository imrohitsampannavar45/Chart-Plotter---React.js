import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import PlotPage from './PlotPage'
import './index.css';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/plot" element={<PlotPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

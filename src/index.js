// src/index.js (or equivalent entry file)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
// 👇 1. Import the BrowserRouter


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 👇 2. Wrap your entire application component */}
      <App />
  </React.StrictMode>
);
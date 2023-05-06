import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="284888329869-dmi8tp50tpo25auqsp5on9svtq506o29.apps.googleusercontent.com">
      <Router>
      <App />
      </Router>
    </GoogleOAuthProvider>;
  </React.StrictMode>
);

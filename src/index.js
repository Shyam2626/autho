import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Auth0Provider} from '@auth0/auth0-react';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain='shyam26.us.auth0.com'
    clientId='qk6ArovzxyPBs62XpmfQIzc2GRigCVag'
      redirect_uri= {window.location.origin}
      audience="this is a unique identifier"
      scope="openid profile email"
  >
    <App />
  </Auth0Provider>
  </React.StrictMode>
);


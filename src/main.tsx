import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-qhgi5fbx6fuxt8pk.us.auth0.com"
            clientId="I4U9JyKl1dy1LVKsnFHa0M6Vt1jFS83H"
            authorizationParams={{
                redirect_uri: window.location.origin,
            }}
        >
            <App />
        </Auth0Provider>
    </React.StrictMode>
);

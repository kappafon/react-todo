import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './_app.tsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

export const redirectURI = `${window.location.origin}/react-todo/`;

const router = createBrowserRouter([
    {
        path: '/react-todo',
        element: <App />,
        children: [
            {
                path: 'all',
                element: <div>All TODOs</div>,
            },
            {
                path: 'active',
                element: <div>Active TODOs</div>,
            },
            {
                path: 'completed',
                element: <div>Completed TODOs</div>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-qhgi5fbx6fuxt8pk.us.auth0.com"
            clientId="I4U9JyKl1dy1LVKsnFHa0M6Vt1jFS83H"
            authorizationParams={{
                redirect_uri: redirectURI,
            }}
        >
            <RouterProvider router={router} />
        </Auth0Provider>
    </React.StrictMode>
);

import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import { redirectURI } from './main';
import { Outlet } from 'react-router-dom';

interface AuthenticatedAppProps {}

const AuthenticatedApp: React.FunctionComponent<AuthenticatedAppProps> = () => {
    const { logout, user, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <div>
                {user?.picture && <img src={user?.picture} alt={user?.name} />}
                <h2>{user?.name}</h2>
                <p>{user?.email}</p>
            </div>
            <Outlet />
            <button
                onClick={() =>
                    logout({
                        logoutParams: {
                            returnTo: redirectURI,
                        },
                    })
                }
            >
                {' '}
                Logout
            </button>
        </>
    );
};

export default AuthenticatedApp;

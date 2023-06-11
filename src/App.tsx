import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
    const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
        useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel="noopener">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel="noopener">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                {!isAuthenticated ? (
                    <button onClick={() => loginWithRedirect()}>Login</button>
                ) : (
                    <>
                        <div>
                            {user?.picture && (
                                <img src={user?.picture} alt={user?.name} />
                            )}
                            <h2>{user?.name}</h2>
                            <p>{user?.email}</p>
                        </div>
                        <button
                            onClick={() =>
                                logout({
                                    logoutParams: {
                                        returnTo: window.location.origin,
                                    },
                                })
                            }
                        >
                            {' '}
                            Logout
                        </button>
                    </>
                )}
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    );
}

export default App;

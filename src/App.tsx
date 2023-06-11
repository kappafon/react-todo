import './App.css';
import { useAuth0 } from '@auth0/auth0-react';
import UnauthenticatedApp from './unauthenticatedApp';
import AuthenticatedApp from './authenticatedApp';

const App = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        <div className="card">
            {!isAuthenticated ? <UnauthenticatedApp /> : <AuthenticatedApp />}
        </div>
    );
};

export default App;

import './App.css';
import { useAuth0 } from '@auth0/auth0-react';

interface UnauthenticatedAppProps {}

const UnauthenticatedApp: React.FunctionComponent<
    UnauthenticatedAppProps
> = () => {
    const { loginWithRedirect } = useAuth0();

    return <button onClick={() => loginWithRedirect()}>Login</button>;
};

export default UnauthenticatedApp;

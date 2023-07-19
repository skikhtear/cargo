


import { useHistory } from 'react-router-dom';

const SignOutButton = () => {
    const history = useHistory();

    const handleSignOut = () => {
        // Clear user session or authentication token
        // Example: localStorage.removeItem('token');

        // Redirect to the desired page
        history.push('/signin'); // Replace with your desired sign-in page route
    };

    return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;

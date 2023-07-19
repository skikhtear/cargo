
import { Navigate, useLocation } from 'react-router-dom';
import Login from '../component/Login/Login';


const PrivateRoute = ({ children }) => {
    const {email } = Login()
    const location = useLocation();
    if (email) {
        return (children)
    }

    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
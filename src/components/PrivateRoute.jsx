import { Navigate, Outlet } from 'react-router-dom';
import Spinner from './Spinner';

const PrivateRoute = ({ loggedIn, status }) => {
  if (status) {
    return <Spinner />;
  }

  return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />;
};
export default PrivateRoute;

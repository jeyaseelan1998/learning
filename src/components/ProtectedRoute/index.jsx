import { Navigate, Outlet } from 'react-router-dom';
import Cookies from "js-cookies";

const ProtectedRoute = () => {
  if (Cookies.getItem("token") === null) {
    // Redirect them to the login page if not logged in
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};

export default ProtectedRoute;

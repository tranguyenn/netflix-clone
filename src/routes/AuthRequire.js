import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";



function AuthRequire({ children }) {
  const { isAuthenticated, isInitialized } = useContext(AuthContext);
  const location = useLocation();


  if (!isAuthenticated) {
    return <Navigate to={`/login`} state={{ backgroundLocation: location }} replace />;
  }

  return children;
}



export default AuthRequire;
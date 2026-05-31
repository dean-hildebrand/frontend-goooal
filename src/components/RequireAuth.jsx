import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../auth";

// Wraps a protected route. Redirects to /login when there's no token.
// server is the real authority and returns 401 if the token is invalid or expired.
const RequireAuth = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default RequireAuth;

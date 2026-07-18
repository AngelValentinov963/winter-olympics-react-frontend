import { Navigate } from "react-router-dom";
import isAuthenticated from "../auth/authService.jsx"
import { isTokenExpired } from "../auth/tokenUtils";

function ProtectedRoute({ children }) {
    const token = localStorage.getItem("access_token");

    if (!token || isTokenExpired(token)) {
    return <Navigate to="/login"/>;
}

    return children;
}

export default ProtectedRoute;
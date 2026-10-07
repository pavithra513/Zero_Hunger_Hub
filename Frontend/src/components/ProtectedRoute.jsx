import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRole }) {

  const user = JSON.parse(
    localStorage.getItem("user")
  );

  // User login pannala
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Wrong role
  if (user.role !== allowedRole) {
    return <Navigate to="/" replace />;
  }

  // Correct role
  return children;
}

export default ProtectedRoute;
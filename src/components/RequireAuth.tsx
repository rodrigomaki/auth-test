import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { user } = useAuth();
  const location = useLocation();

  return user?.role?.find((role) => allowedRoles.includes(role)) ? (
    <Outlet />
  ) : user?.data ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;

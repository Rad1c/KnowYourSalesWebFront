import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const refresh = localStorage.getItem("refresh");

  return !refresh ? <Navigate to="/login" /> : <Outlet />;
};

export default RequireAuth;

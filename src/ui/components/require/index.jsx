import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const refresh = localStorage.getItem("refresh");

  return !refresh ? <Navigate to="/home" /> : <Outlet />;
};

export default RequireAuth;

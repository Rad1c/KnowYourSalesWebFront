import { useLocation, Navigate, Outlet } from "react-router-dom";

const NonRequireAuth = () => {
  const refresh = localStorage.getItem("refresh");

  return !refresh ? <Outlet /> : <Navigate to="/" />;
};

export default NonRequireAuth;

import React from "react";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const isAuthenticated = sessionStorage.getItem("token");
  if (!isAuthenticated) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default PrivateRoutes;

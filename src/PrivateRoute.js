import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router-dom";

const PrivateRoute = ({children}) => {
  let isAuthenticated = useSelector((state) => state.authReducer.data);

  if (isAuthenticated) {
    return children;
  }


  return <Navigate to="/login" />;
};

export default PrivateRoute;

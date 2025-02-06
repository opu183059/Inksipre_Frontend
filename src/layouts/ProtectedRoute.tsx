import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/jwtDecode";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  console.log("user: ", user);

  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;

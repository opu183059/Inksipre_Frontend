import { ReactNode } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { logout, useCurrentToken } from "../redux/feature/auth/authSlice";
import { Navigate } from "react-router-dom";
import { verifyToken } from "../utils/jwtDecode";

type TProtectedRoute = {
  children: ReactNode;
  role: string | undefined;
};

const ProtectedRoute = ({ children, role }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  const dispatch = useAppDispatch();

  // @ts-expect-error role is defined as user/admin
  if (role !== undefined && role !== user?.userRole) {
    dispatch(logout());
    return <Navigate to="/login" replace={true} />;
  }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};
export default ProtectedRoute;

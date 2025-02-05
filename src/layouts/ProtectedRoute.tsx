import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { useCurrentToken } from "../redux/feature/auth/authSlice";
import { verifyToken } from "../utils/jwtDecode";
import { Navigate } from "react-router-dom";

type TProtectedRoute = {
  children: ReactNode;
  userRole: string | undefined;
};

const ProtectedRoute = ({ children, userRole }: TProtectedRoute) => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = verifyToken(token);
  }

  console.log("user: ", user, "Role: ", userRole);

  //   const dispatch = useAppDispatch();

  //   if (userRole !== undefined && userRole !== user?.userRole) {
  //     // dispatch(logout());
  //     return <Navigate to="/login" replace={true} />;
  //   }
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;

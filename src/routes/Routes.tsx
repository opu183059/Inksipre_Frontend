import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import AboutPage from "../pages/about/AboutPage";
import HomePage from "../pages/home/HomePage";
import ErrorPage from "../pages/error/ErrorPage";
import ProductsPage from "../pages/products/ProductsPage";
import BlogPage from "../pages/blog/BlogPage";
import SingleProduct from "../pages/products/SingleProduct";
import LoginPage from "../pages/authorization/LoginPage";
import RegisterPage from "../pages/authorization/RegisterPage";
import Dashboard from "../pages/dashboard/Dashboard";
import ProtectedRoute from "../layouts/ProtectedRoute";
import UserCartPage from "../pages/dashboard/user/cart/UserCartPage";
import VerifyOrderPage from "../pages/dashboard/user/order/VerifyOrderPage";
import Orderpage from "../pages/dashboard/user/order/Orderpage";
import AllOrders from "../pages/dashboard/admin/order/AllOrders";
import ProfileInformation from "../pages/dashboard/admin/profile/ProfileInformation";
import AllUsersPage from "../pages/dashboard/admin/user/AllUsersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:productId",
        element: <SingleProduct />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Navigate to="/admin/dashboard/all-orders" replace />,
      },
      {
        path: "/admin/dashboard/all-orders",
        element: <AllOrders />,
      },
      {
        path: "/admin/dashboard/profile",
        element: <ProfileInformation />,
      },
      {
        path: "/admin/dashboard/user-details",
        element: <AllUsersPage />,
      },
    ],
  },
  {
    path: "/user/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/user/dashboard",
        element: <Navigate to="/user/dashboard/cart" replace />,
      },
      {
        path: "/user/dashboard/cart",
        element: <UserCartPage />,
      },
      {
        path: "/user/dashboard/profile",
        element: <ProfileInformation />,
      },
      {
        path: "/user/dashboard/verify-order",
        element: <VerifyOrderPage />,
      },
      {
        path: "/user/dashboard/orders",
        element: <Orderpage />,
      },
    ],
  },
]);

export default router;

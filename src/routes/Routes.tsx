import { createBrowserRouter } from "react-router-dom";
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
import PageA from "../pages/dashboard/PageA";
import PageB from "../pages/dashboard/PageB";
import ProtectedRoute from "../layouts/ProtectedRoute";

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
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/a",
        element: <PageA />,
      },
      {
        path: "/dashboard/b",
        element: <PageB />,
      },
    ],
  },
]);

export default router;

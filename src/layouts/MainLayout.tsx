import { Outlet } from "react-router-dom";
import MainNavbar from "../components/common/MainNavbar";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <>
      <MainNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

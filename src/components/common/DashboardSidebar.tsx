import { Layout, Menu, MenuProps } from "antd";
import { jwtDecode } from "jwt-decode";
import { useAppSelector } from "../../redux/hooks";
import { TUser, useCurrentToken } from "../../redux/feature/auth/authSlice";
import { Link } from "react-router-dom";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DashboardSidebar = () => {
  const token = useAppSelector(useCurrentToken);

  let user;

  if (token) {
    user = jwtDecode(token);
  }

  let sidebarItems: MenuProps["items"];

  switch ((user as TUser)!.userRole) {
    case userRole.ADMIN:
      sidebarItems = [
        {
          key: "profile",
          label: <Link to={"/admin/dashboard/profile"}>Profile</Link>,
        },
        {
          key: "products",
          label: <Link to={"/admin/dashboard/products"}>Products</Link>,
        },
        {
          key: "Order",
          label: <Link to={"/admin/dashboard/all-orders"}>All Orders</Link>,
        },
        {
          key: "users",
          label: <Link to={"/admin/dashboard/user-details"}>User</Link>,
        },
        {
          key: "homepage",
          label: <Link to={"/"}>Homepage</Link>,
        },
      ];
      break;
    case userRole.USER:
      sidebarItems = [
        {
          key: "profile",
          label: <Link to={"/user/dashboard/profile"}>Profile</Link>,
        },
        {
          key: "cart",
          label: <Link to={"/user/dashboard/cart"}>Cart</Link>,
        },
        {
          key: "orders",
          label: <Link to={"/user/dashboard/orders"}>Orders</Link>,
        },
        {
          key: "homepage",
          label: <Link to={"/"}>Homepage</Link>,
        },
      ];
      break;

    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      className="h-screen sticky top-0 left-0 text-gray-50"
    >
      <div className="h-[4rem] flex justify-center items-center text-gray-50">
        <h1>Inkspire</h1>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default DashboardSidebar;

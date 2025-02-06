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
          key: "1",
          label: "Admin",
        },
        {
          key: "2",
          label: "2",
          children: [
            {
              key: "3",
              label: "3",
            },
            {
              key: "4",
              label: "4",
            },
          ],
        },
        {
          key: "3",
          label: "3",
        },
      ];
      break;
    case userRole.USER:
      sidebarItems = [
        {
          key: "cart",
          label: <Link to={"/user/dashboard/cart"}>Cart</Link>,
        },
        {
          key: "profile",
          label: "Profile",
          children: [
            {
              key: "information",
              label: "Information",
            },
            {
              key: "settings",
              label: "Settings",
            },
          ],
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
      <div className="mt-10 flex gap-3 items-center justify-center">
        <Link
          to={"/"}
          className="bg-gray-50 text-black px-2 py-1 rounded-md hover:bg-blue-500 hover:text-gray-50 duration-300"
        >
          Home page
        </Link>
        <button className="bg-gray-50 text-black px-2 py-1 rounded-md hover:bg-blue-500 hover:text-gray-50 duration-300">
          Logout
        </button>
      </div>
    </Sider>
  );
};

export default DashboardSidebar;

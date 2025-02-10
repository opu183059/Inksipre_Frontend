import { Avatar, Badge, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { mainMenu } from "../menu/mainMenu";
import Logo from "../../assets/Logo";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { UserOutlined } from "@ant-design/icons";
import { FiShoppingCart } from "react-icons/fi";
import { logout, selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCurrentCart } from "../../redux/feature/cart/cartSlice";
import MobileMenu from "./MobileMenu";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);
  const cartItem = useAppSelector(selectCurrentCart);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu className="w-48">
      <Menu.Item key="dashboard">
        <Link to={`${user?.userRole}/dashboard`}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="profile">
        <Link to={`${user?.userRole}/dashboard/profile`}>Profile</Link>
      </Menu.Item>

      <Menu.Divider />
      <Menu.Item key="logout" className="text-red-500" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="sticky top-0 z-50 shadow-md text-primary bg-primary">
      <div className="container flex justify-between items-center py-4">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="menu hidden md:block">
          {mainMenu.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="menu-hover mx-2 font-poppins font-bold"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {user ? (
            <div className="flex items-end gap-4">
              {user.userRole == "user" && (
                <Link to={`${user?.userRole}/dashboard/cart`}>
                  <Badge
                    size="small"
                    count={cartItem.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                    overflowCount={20}
                  >
                    <FiShoppingCart size={20} className="dark:text-gray-50" />
                  </Badge>
                </Link>
              )}
              <Dropdown
                overlay={menu}
                trigger={["hover"]}
                open={open}
                onOpenChange={(flag) => setOpen(flag)}
                className="hidden md:block"
              >
                <Avatar
                  size={{ xs: 30, sm: 36, md: 40 }}
                  icon={<UserOutlined />}
                  className="cursor-pointer"
                />
              </Dropdown>
            </div>
          ) : (
            <Link to={"/login"} className="hidden md:block">
              <Button
                type="primary"
                className="btn10 !text-black hover:!text-gray-50 dark:!text-gray-50"
              >
                Login
              </Button>
            </Link>
          )}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-black dark:text-gray-50 text-2xl"
          >
            {darkMode ? <IoMoon /> : <IoSunny />}
          </button>
          <label className="block md:hidden">
            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
              <input
                className="hidden peer"
                type="checkbox"
                onChange={() => {
                  setMenuOpen(!menuOpen);
                }}
              />
              <div className="w-[50%] h-[2px] bg-black dark:bg-gray-50 rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]"></div>
              <div className="w-[50%] h-[2px] bg-black dark:bg-gray-50 rounded-md transition-all duration-300 origin-center peer-checked:hidden"></div>
              <div className="w-[50%] h-[2px] bg-black dark:bg-gray-50 rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]"></div>
            </div>
          </label>
          {menuOpen && <MobileMenu />}
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;

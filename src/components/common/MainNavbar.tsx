import { Avatar, Badge, Button, Dropdown, Menu } from "antd";
import { Link } from "react-router-dom";
import { mainMenu } from "../menu/mainMenu";
import Logo from "../../assets/Logo";
import { useEffect, useState } from "react";
import { IoSunny } from "react-icons/io5";
import { IoMoon } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { logout, selectCurrentUser } from "../../redux/feature/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCurrentCrt } from "../../redux/feature/cart/cartSlice";

const MainNavbar = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  const user = useAppSelector(selectCurrentUser);
  const cartItem = useAppSelector(selectCurrentCrt);

  const handleLogout = () => {
    dispatch(logout());
  };

  const menu = (
    <Menu className="w-48">
      <Menu.Item key="dashboard">
        <Link to={"/dashboard"}>Dashboard</Link>
      </Menu.Item>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="settings">Settings</Menu.Item>
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
        <div>
          <Logo />
        </div>
        <div className="menu">
          {mainMenu.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className=" hover:text-blue-500 mx-2 font-poppins uppercase duration-300 font-bold"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          {user ? (
            <div className="flex items-baseline gap-4">
              <Link to={"/dashboard/cart"}>
                <Badge
                  size="small"
                  count={cartItem.reduce(
                    (total, item) => total + item.quantity,
                    0
                  )}
                  overflowCount={20}
                >
                  <FiShoppingCart size={22} />
                </Badge>
              </Link>
              <Dropdown
                overlay={menu}
                trigger={["hover"]}
                open={open}
                onOpenChange={(flag) => setOpen(flag)}
              >
                <Avatar
                  src="https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg"
                  className="cursor-pointer"
                />
              </Dropdown>
            </div>
          ) : (
            <Link to={"/login"}>
              <Button
                type="primary"
                className="btn10 !text-black hover:!text-gray-50"
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
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;

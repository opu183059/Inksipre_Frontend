import { Link } from "react-router-dom";
import { mainMenu } from "../menu/mainMenu";
import { Button } from "antd";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logout, selectCurrentUser } from "../../redux/feature/auth/authSlice";

const MobileMenu = () => {
  const user = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  return (
    <div className="absolute top-16 left-0 backdrop-blur bg-black/25 w-full">
      <div className="w-full flex flex-col gap-4 items-end p-6 h-[90vh] text-lg text-white font-bold">
        {mainMenu.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.title}
          </Link>
        ))}

        {user ? (
          <>
            <Link to={`${user?.userRole}/dashboard`}>Dashboard</Link>
            <Link to={`${user?.userRole}/dashboard/profile`}>Profile</Link>
            <Button
              type="primary"
              className="btn10"
              onClick={() => {
                dispatch(logout());
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to={"/login"}>
            <Button type="primary" className="btn10">
              Login
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;

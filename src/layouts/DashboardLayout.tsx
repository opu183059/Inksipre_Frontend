import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <h1>welcome to dash board</h1>
      <div className="flex gap-5 ">
        <Link to={"/dashboard/a"}>a</Link>
        <Link to={"/dashboard/b"}>b</Link>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

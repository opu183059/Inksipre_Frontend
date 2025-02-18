import { useGetSingleUserQuery } from "../../../../redux/feature/userApi/userApi";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentUser } from "../../../../redux/feature/auth/authSlice";
import Loader from "../../../../components/common/Loader";
import { Card, Image, Tag } from "antd";

const ProfileInformation = () => {
  const user = useAppSelector(selectCurrentUser);

  const { data, isLoading } = useGetSingleUserQuery(user?.userID);
  const userData = data?.data;
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Card title="User Information" style={{ width: "100%" }}>
            <div className="flex gap-5 flex-col md:flex-row items-start justify-between">
              <div className="md:w-2/6 grid grid-cols-3 gap-1">
                <p className="uppercase">Name</p>
                <p className="col-span-2 uppercase">: {userData.name}</p>

                <p className="uppercase">Email</p>
                <p className="col-span-2">: {userData.email}</p>

                <p className="mt-2 uppercase">User ID</p>
                <p className="col-span-2 mt-2">: {user?.userID.slice(-6)}</p>
                <p className="uppercase">Role</p>
                <p className="col-span-2">
                  :{" "}
                  <Tag color={userData.role === "admin" ? "gold" : "blue"}>
                    {userData.role}
                  </Tag>
                </p>
                <p className="mt-2 uppercase">Mobile</p>
                <p className="col-span-2 mt-2">: Not set yet</p>
                <p className="uppercase">Address</p>
                <p className="col-span-2">: Not set yet</p>
              </div>

              <Image
                src={"https://demofree.sirv.com/nope-not-here.jpg"}
                fallback={"https://demofree.sirv.com/nope-not-here.jpg"}
                alt={userData.name}
                style={{ width: 160, height: 160 }}
                className="rounded-lg shadow-md"
              />
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProfileInformation;

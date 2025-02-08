import { useGetSingleUserQuery } from "../../../../redux/feature/userApi/userApi";
import { useAppSelector } from "../../../../redux/hooks";
import { selectCurrentUser } from "../../../../redux/feature/auth/authSlice";
import Loader from "../../../../components/common/Loader";
import { Card } from "antd";

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
          <Card title="Profile Information" style={{ width: 300 }}>
            <div className="grid grid-cols-3">
              <p>Name:</p>
              <p>{userData.name}</p>
              <p></p>
              <p>Email:</p>
              <p>{userData.email}</p>
              <p></p>
              <p>Role:</p>
              <p>{userData.role}</p>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default ProfileInformation;

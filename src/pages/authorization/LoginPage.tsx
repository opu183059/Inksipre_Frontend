import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();

  console.log(error);

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const response = await login(values).unwrap();
      const decodedUser = jwtDecode(response.data.token);
      dispatch(
        setUser({
          user: decodedUser,
          token: response.data.token,
        })
      );
      if (response.success) {
        message.success(response.message);
      }
    } catch (err: any) {
      message.error(err.data.message as string);
    }
  };
  return (
    <div className="container min-h-screen py-10 flex items-center justify-center">
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[
            { type: "email" },
            { required: true, message: "Please input your Email!" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="text-primary">
          <Button block type="primary" htmlType="submit">
            Log in
          </Button>
          or <Link to={"/register"}>Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

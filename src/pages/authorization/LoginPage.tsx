import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/feature/auth/authApi";
import { useAppDispatch } from "../../redux/hooks";
import { setUser } from "../../redux/feature/auth/authSlice";
import { jwtDecode } from "jwt-decode";
import Lottie from "lottie-react";
import animation from "../../assets/animation_lk7w5ouy.json";

const LoginPage = () => {
  const [login, { error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(error);

  const onFinish = async (values: { email: string; password: string }) => {
    const toster = message.loading("Loging in...", 0);
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
        toster();
        message.success(response.message);
        // @ts-expect-error: Unreachable code error
        navigate(`/${decodedUser?.userRole}/dashboard`, { replace: true });
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toster();
      message.error(err?.data?.message as string);
    }
  };
  return (
    <div className="container min-h-screen py-10 flex gap-5 items-center justify-center">
      <div className="hidden md:block md:w-1/2">
        <Lottie animationData={animation} style={{ width: 400, height: 400 }} />
      </div>
      <Form
        name="login"
        initialValues={{ remember: true }}
        style={{ maxWidth: 360 }}
        onFinish={onFinish}
        className="md:w-1/2"
      >
        <Form.Item
          hasFeedback
          name="email"
          rules={[
            { type: "email" },
            { required: true, message: "Please input your Email!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" size="large" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
            size="large"
          />
        </Form.Item>
        <Form.Item className="text-primary">
          <Button block type="primary" htmlType="submit" size="large">
            Log in
          </Button>
          or <Link to={"/register"}>Register now!</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;

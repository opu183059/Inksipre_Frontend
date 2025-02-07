import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useUserRegistrationMutation } from "../../redux/feature/userApi/userApi";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [addStudent] = useUserRegistrationMutation();

  const navigate = useNavigate();

  const onFinish = async (values: {
    name: string;
    email: string;
    password: string;
  }) => {
    const toster = message.loading("Creating Account...", 0);
    try {
      const res = await addStudent(values);
      toster();
      if (res.data) {
        message.success(res?.data?.message);
        navigate("/login");
      } else if ("status" in res.error! && res?.error?.status === 409) {
        message.error("This mail is already registered");
      } else {
        message.error("Something went wrong, try again");
      }
    } catch (error) {
      toster();
      console.log(error);
      message.error("Something went wrong, try again");
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
          hasFeedback
          name="name"
          rules={[
            { type: "string" },
            { required: true, message: "Please input your User Name!" },
          ]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          hasFeedback
          name="email"
          rules={[
            { type: "email" },
            { required: true, message: "Please input your Email!" },
          ]}
        >
          <Input prefix={<MailOutlined />} placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item className="text-primary">
          <Button block type="primary" htmlType="submit">
            Register
          </Button>
          or <Link to={"/login"}>Login now</Link>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterPage;

import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import DashboardSidebar from "../components/common/DashboardSidebar";

const { Content } = Layout;

const DashboardLayout = () => {
  return (
    <Layout style={{ height: "100%" }}>
      <DashboardSidebar />
      <Layout>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;

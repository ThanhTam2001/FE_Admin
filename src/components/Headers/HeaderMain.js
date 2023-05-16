import { Layout, Space } from "antd";
import SibarMain from "../SideBar/SibarMain";
import { Outlet } from "react-router-dom";
import ModalView from "../Content/ModalView";

const HeaderMain = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const headerStyle = {
    textAlign: "center",
    color: "#fff",
    height: 64,
    paddingInline: 50,
    lineHeight: "64px",
    backgroundColor: "#7dbcea",
  };

  const contentStyle = {
    textAlign: "center",
    minHeight: 120,
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#108ee9",
  };

  const siderStyle = {
    textAlign: "center",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#3ba0e9",
  };

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#7dbcea",
  };

  return (
    <>
      <Space direction="vertical" style={{ width: "100%", backgroundColor:"pink" }} size={[0, 48]}>
        <Layout>
          <Sider style={siderStyle}>
            {" "}
            <SibarMain />{" "}
          </Sider>
          <Layout>
            <Header style={headerStyle}>Header</Header>
            <Content style={contentStyle}>
              <Outlet />
            </Content>
            <Footer style={footerStyle}>Footer</Footer>
          </Layout>
        </Layout>
      </Space>

      
    </>
  );
};

export default HeaderMain;

import { useEffect, useState } from "react";
import { GoSidebarCollapse } from "react-icons/go";
import { FloatButton, Layout, theme } from "antd";
import Sidebar from "./Sidebar";
import Subhead from "./Subhead";
import Random from "./Random";
import Grayscale from "./Grayscale";
import Favourite from "./Favourite";
import img from "../assets/Icon.png";
const { Header, Content, Footer } = Layout;

const Homepage = () => {
  const [collapse, setCollapse] = useState(true);
  const [current, setCurrent] = useState(1);
  const [favourite, setFavourite] = useState([]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const handleFavourite = (e) => {
    console.log(e);
  };

  return (
    <Layout
      className={`${collapse && "md:ml-40"} transition-all`}
      style={{
        minHeight: "100vh",
      }}
    >
      <Header
        style={{
          position: "sticky",
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <div className="text-center flex h-full flex-row px-8 items-center justify-around gap-6">
          <img className={`${collapse && "md:hidden"}`} src={img} />
          <div className="text-xl">Random Image App</div>
        </div>
      </Header>
      <Subhead current={current} setCurrent={setCurrent} />
      <Content
        style={{
          margin: "10px 16px",
        }}
        className={`${collapse && "ml-20"}`}
      >
        <div
          style={{
            padding: 24,
            minHeight: "70vh",
            color: "black",
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="flex"
        >
          <div
            className={`${
              current == 1 ? " scale-100" : "fixed scale-0   "
            }  transition-transform`}
          >
            <Random />
          </div>
          <div
            className={`${
              current == 2 ? "scale-100" : "fixed scale-0"
            } transition-transform `}
          >
            <Grayscale />
          </div>
          <div
            className={`${
              current == 3 ? "scale-100" : "scale-0 fixed"
            } transition-transform`}
          >
            <Favourite />
          </div>
        </div>
      </Content>
      <Sidebar collapse={collapse} current={current} setCurrent={setCurrent} />
      <Footer
        style={{
          textAlign: "center",
        }}
      ></Footer>
      <FloatButton
        className="left-8 hidden md:block "
        type={collapse ? "default" : "primary"}
        icon={<GoSidebarCollapse />}
        onClick={() => setCollapse(!collapse)}
      />
    </Layout>
  );
};
export default Homepage;

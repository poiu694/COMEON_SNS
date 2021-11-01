import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { Input, Menu, Row, Col, Card, Avatar } from "antd";
import {
  GithubOutlined,
  GoogleOutlined,
  SlackOutlined,
} from "@ant-design/icons";

import UserProfle from "../Components/UserProfile";
import LoginForm from "../Components/LoginForm";

const { Search } = Input;

const DirectorProfile = () => {
  return (
    <Card
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <GithubOutlined key="github" />,
        <GoogleOutlined key="google" />,
        <SlackOutlined key="slack"/>,
      ]}
    >
      <Card.Meta
        avatar={
          <Avatar src="https://avatars.githubusercontent.com/u/43488305?s=60&v=4" />
        }
        title="Lee Sang Min"
        description="Next + Node + Redux Project"
      />
    </Card>
  );
}

const Navigation = ({ me }) => {
  return (
    <Menu mode="horizontal" className="top-nav-container" key="nav-container">
      <Menu.Item id="logo" key="home">
        <Link href="/">
          <a>Lee's</a>
        </Link>
      </Menu.Item>

      <div className="nav-right">
        <Menu.Item id="top-search-bar" key="search">
          <Search className="nav-search" placeholder="Search" allowClear />
        </Menu.Item>

        {me ? (
          <Menu.Item key="profile">
            <Link href="/profile">
              <a> Profile </a>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="signup">
            <Link href="/signup">
              <a> Sign Up </a>
            </Link>
          </Menu.Item>
        )}
      </div>

      <Menu.Item key="2profile2">
        <Link href="/profile">
          <a> Profile </a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

const Contents = ({ children, me }) => {
  return (
    <main className="contents-container">
      <aside className="left-side-container">
        {me ? <UserProfle /> : <LoginForm />}
      </aside>
      <article className="main-article">{children}</article>
      <aside className="right-side-container">
        <DirectorProfile />
      </aside>
    </main>
  );
};

const Layout = ({ children }) => {
  const me = useSelector(state => state.user.me);

  return (
    <div className="layout-container">
      <Navigation me={me} />
      <Contents children={children} me={me} />
    </div>
  );
};

export default Layout;

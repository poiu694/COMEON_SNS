import React from "react";
import PropTypes from "prop-types";
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
import { loginAction } from "../Store/reducers";

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
        description="Next + React + Redux Project"
      />
    </Card>
  );
}

const Navigation = ({ isLoggedIn }) => {
  return (
    <Menu mode="horizontal" className="top-nav-container">
      <Menu.Item id="logo">
        <Link href="/">
          <a>Lee's</a>
        </Link>
      </Menu.Item>

      <div className="nav-right">
        <Menu.Item id="top-search-bar">
          <Search className="nav-search" placeholder="Search" allowClear />
        </Menu.Item>

        {isLoggedIn ? (
          <Menu.Item>
            <Link href="/profile">
              <a> Profile </a>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Link href="/signup">
              <a> Sign Up </a>
            </Link>
          </Menu.Item>
        )}
      </div>

      <Menu.Item>
        <Link href="/profile">
          <a> Profile </a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

const Contents = ({ children, isLoggedIn }) => {

  return (
    <main className="contents-container">
      <aside className="left-side-container">
        {isLoggedIn ? (
          <UserProfle />
        ) : ( 
          <LoginForm />
        )}
      </aside>
      <article className="main-article">
        {children}
      </article>
      <aside className="right-side-container">
        <DirectorProfile />
      </aside>
    </main>
  );
};

const Layout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  return (
    <div className="layout-container">
      <Navigation isLoggedIn={isLoggedIn} />
      <Contents
        children={children}
        isLoggedIn={isLoggedIn}
      />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;

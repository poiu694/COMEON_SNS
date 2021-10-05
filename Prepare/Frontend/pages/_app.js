import React from "react";
import Head from "next/head";
import wrapper from "../Store/configureStore";
import "antd/dist/antd.css";

import "../scss/layout.scss";
import "../scss/profile.scss";
import "../scss/signup.scss";
import "../scss/post.scss";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Lee</title>
      </Head>
      <Component id="wrap"/>
    </>
  );
};

export default wrapper.withRedux(App);

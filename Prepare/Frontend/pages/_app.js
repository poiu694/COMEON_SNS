import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";
import { wrapper } from "../Store/configureStore";
import "antd/dist/antd.css";

import "../scss/layout.scss";
import "../scss/profile.scss";
import "../scss/signup.scss";

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

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.witRedux(App);

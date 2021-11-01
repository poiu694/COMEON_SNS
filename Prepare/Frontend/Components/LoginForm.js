import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import useInput from "../Hooks/useInput";

import { useDispatch, useSelector } from "react-redux";
import { LOG_IN_REQUEST } from "../Store/type";

const LoginFooter = ({ logInLoading }) => {
  return (
    <footer className="login-form-button">
      <Form.Item>
        <Button htmlType="submit" loading={logInLoading}>
          Submit
        </Button>
      </Form.Item>
      <Form.Item>
        <Link href="/signup">
          <a>회원가입</a>
        </Link>
      </Form.Item>
    </footer>
  );
};

const LoginHeader = ({ onChangeId, onChangePassword }) => {
  return (
    <>
      <p> Login to My Site ! </p>
      <label htmlFor="user-id">아이디</label>
      <Input
        label="ID"
        name="userID"
        className="user-form"
        onChange={onChangeId}
        required
      />
      <label htmlFor="user-password">비밀번호</label>
      <Input
        label="PW"
        name="userPW"
        className="user-form"
        onChange={onChangePassword}
        required
      />
    </>
  );
};

const LoginForm = () => {
  const dispatch = useDispatch();
  const { logInLoading } = useSelector(state => state.user);

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleFinish = useCallback(() => {
    dispatch({
      type: LOG_IN_REQUEST,
      data: { id, password },
    });
  }, [id, password]);

  const handleFailed = useCallback(() => {
    console.log("Fail");
  }, []);

  return (
    <Form
      onFinish={handleFinish}
      onFinishFailed={handleFailed}
      className="login-form-container"
    >
      <LoginHeader
        onChangeId={onChangeId}
        onChangePassword={onChangePassword}
      />
      <LoginFooter logInLoading={logInLoading} />
    </Form>
  );
};

export default LoginForm;

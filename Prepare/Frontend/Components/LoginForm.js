import React, { useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import useInput from "../Hooks/useInput";

import { loginAction } from "../Store/reducers/user";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");

  const handleFinish = useCallback(() => {
    dispatch(loginAction({id, password}));
  }, [id, password]);

  const handleFailed = useCallback(() => {
    console.log("Fail");
  }, []);

  return (
    <Form onFinish={handleFinish} onFinishFailed={handleFailed} className="login-form-container">
      <p> Login to My Site ! </p>
      <Form.Item
        label="ID"
        name="userID"
        className="user-form"
        rules={[{ required: true, message: "Input Your Name !" }]}
      >
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </Form.Item>
      <Form.Item
        label="PW"
        name="userPW"
        className="user-form"
        rules={[{ required: true, message: "Input Your Password !" }]}
      >
        <Input.Password
          name="user-password"
          value={password}
          onChange={onChangePassword}
        />
      </Form.Item>

      <footer className="login-form-button">
        <Form.Item>
          <Button htmlType="submit">Submit</Button>
        </Form.Item>
        <Form.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Form.Item>
      </footer>
    </Form>
  );
};

export default LoginForm;

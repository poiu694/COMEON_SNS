import React, { useCallback, useState } from "react";

import Head from "next/head";
import PropTypes from "prop-types";
import { Form, Input, Checkbox, Button } from "antd";

import Layout from "../components/Layout";
import useInput from "../Hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { SIGN_UP_REQUEST } from "../Store/type";

const TextInput = ({ value }) => {
  return <div>{value}</div>;
};

TextInput.propTypes = {
  value: PropTypes.string,
};

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, handleChangeId] = useInput("");
  const [nickname, handleChangeNickname] = useInput("");
  const [password, handleChangePassword] = useInput("");

  const dispatch = useDispatch();

  const me = useSelector((state) => state.user.me);
  const isSigningUp = useSelector((state) => state.user.isSigningUp);

  const handleSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    return dispatch({
      type: SIGN_UP_REQUEST,
      data: {
        id,
        password,
        nickname,
      },
    });
  }, [password, passwordCheck, term]);

  const handleChangePasswordCheck = useCallback(
    e => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password],
  );

  const handleChangeTerm = useCallback(e => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <Layout>
      <Head>
        <title>SignUp | Lee</title>
      </Head>
      <Form onFinish={handleSubmit} className="sign-up-container">
        <div>
          <label htmlFor="user-id">ID</label>
          <br />
          <Input name="user-id" value={id} required onChange={handleChangeId} />
        </div>
        <div>
          <label htmlFor="user-password">Password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            value={password}
            required
            onChange={handleChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">Check your password</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            value={passwordCheck}
            required
            onChange={handleChangePasswordCheck}
          />
          {passwordError && (
            <div className="check-password">Check your password ! </div>
          )}
        </div>
        <div>
          <label htmlFor="user-nick">NickName</label>
          <br />
          <Input
            name="user-nick"
            value={nickname}
            required
            onChange={handleChangeNickname}
          />
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={handleChangeTerm}>
            동의합니다.
          </Checkbox>
          {termError && (
            <div style={{ color: "red" }}>약관에 동의하셔야 합니다.</div>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" loading={isSigningUp}>
            가입하기
          </Button>
        </div>
      </Form>
    </Layout>
  );
};

export default Signup;

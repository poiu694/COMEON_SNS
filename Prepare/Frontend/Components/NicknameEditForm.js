import React, { useCallback, useMemo } from "react";

import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useInput from "../Hooks/useInput";
import { CHANGE_NICKNAME_REQUEST } from "../Store/type";

const NicknameEditForm = () => {
  const me = useSelector(state => state.user.me);
  const [id, onChangeId] = useInput(me?.nickname || "");
  const dispatch = useDispatch();

  const style = useMemo(() => ({
    marginBottom: "20px",
    border: "1px solid #d9d9d9",
    padding: "20px",
  }));

  const handleSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <Form
      style={style}
      className="nickname-edit-container"
      onFinish={handleSubmit}
    >
      <h3> Do you want to change Nickname? </h3>
      <Input.Search
        value={id}
        onChange={onChangeId}
        className="nickname-change"
        addonBefore="Nickname"
        enterButton="Change"
      />
    </Form>
  );
};

export default NicknameEditForm;

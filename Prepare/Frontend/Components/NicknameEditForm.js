import React, { useMemo } from "react";

import { Form, Input } from "antd";

const NicknameEditForm = () => {
  const style = useMemo(() => ({
    marginBottom: "20px",
    border: "1px solid #d9d9d9",
    padding: "20px",
  }));

  return (
    <Form style={style} className="nickname-edit-container">
      <h3> Do you want to change Nickname? </h3>
      <Input.Search className="nickname-change" addonBefore="Nickname" enterButton="Change" />
    </Form>
  );
};

export default NicknameEditForm;

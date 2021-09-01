import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { logoutAction } from "../Store/reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutAction())
  }, []);

  return (
    <Card
      actions={[
        <div key="twit">
          Posts <br /> 0{" "}
        </div>,
        <div key="followings">
          Following <br /> 0{" "}
        </div>,
        <div key="followers">
          Follower <br /> 0{" "}
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>L</Avatar>} title="Lee" />

      <Button onClick={handleLogout}> 로그아웃 </Button>
    </Card>
  );
};

export default UserProfile;

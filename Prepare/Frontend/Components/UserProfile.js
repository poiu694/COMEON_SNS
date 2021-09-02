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
      className="user-profile-container"
      actions={[
        <div key="twit" className="description">
          Posts <br /> 0
        </div>,
        <div key="followings" className="description">
          Following <br /> 0
        </div>,
        <div key="followers" className="description">
          Follower <br /> 0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>L</Avatar>} title="Lee" />

      <Button onClick={handleLogout}> 로그아웃 </Button>
    </Card>
  );
};

export default UserProfile;

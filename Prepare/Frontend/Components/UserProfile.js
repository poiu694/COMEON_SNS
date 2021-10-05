import React, { useCallback } from "react";
import { Card, Avatar, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequestAction } from "../Store/reducers/user";

const UserProfileCard = ({ me, isLoggingOut, handleLogout }) => {
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
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />

      <Button onClick={handleLogout} loading={isLoggingOut}>
        로그아웃
      </Button>
    </Card>
  );
};

const UserProfile = () => {
  const dispatch = useDispatch();
  const { me, isLoggingOut } = useSelector(state => state.user);

  const handleLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  }, []);

  return (
    <UserProfileCard
      me={me}
      isLoggingOut={isLoggingOut}
      handleLogout={handleLogout}
    />
  );
};

export default UserProfile;

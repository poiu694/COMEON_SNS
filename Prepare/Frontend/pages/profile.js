import Head from "next/head";
import React from "react";
import Layout from "../components/Layout";
import NicknameEditForm from "../Components/NicknameEditForm";
import FollowList from "../Components/FollowList";

const dummyFollowingList = [
  { nickname: "Lee" },
  { nickname: "Su" },
  { nickname: "Han" },
];
const dummyFollwerList = [
  { nickname: "Lee" },
  { nickname: "Su" },
  { nickname: "Han" },
];

const Profile = () => {
  return (
    <>
      <Head>
        <title>내 프로필 | Lee</title>
      </Head>
      <Layout>
        <div className="profile-container">
          <FollowList header="팔로잉 목록" data={dummyFollowingList} />
          <FollowList header="팔로워 목록" data={dummyFollwerList} />
          <NicknameEditForm />
        </div>
      </Layout>
    </>
  );
};

export default Profile;

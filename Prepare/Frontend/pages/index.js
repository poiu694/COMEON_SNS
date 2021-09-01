import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Components/Layout";
import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard";

const Home = () => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const mainPosts = useSelector((state) => state.post.mainPosts);

  return (
    <Layout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post}/>)}
    </Layout>
  );
};

export default Home;

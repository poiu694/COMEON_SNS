import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Components/Layout";
import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard";

const Home = () => {
  const me = useSelector(state => state.user.me);
  const mainPosts = useSelector((state) => state.post.mainPosts);

  return (
    <Layout>
      {me && <PostForm />}
      {mainPosts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </Layout>
  );
};

export default Home;

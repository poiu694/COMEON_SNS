import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../Components/Layout";
import PostForm from "../Components/PostForm";
import PostCard from "../Components/PostCard";
import { LOAD_POSTS_REQUEST } from "../Store/type";

const Home = () => {
  const dispatch = useDispatch();

  const me = useSelector(state => state.user.me);
  const mainPosts = useSelector((state) => state.post.mainPosts);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

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

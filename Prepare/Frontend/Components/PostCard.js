import React, { useCallback, useState } from "react";
import { Avatar, Button, Card, List, Popover } from "antd";
import {
  EllipsisOutlined,
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

import CommentCard from "./CommentCard";
import CommentForm from "./CommentForm";
import PostImages from "./PostImages";
import PostCardContent from "./PostCardContent";
import { REMOVE_POST_REQUEST } from "../Store/type";

const CardContent = ({ post }) => {
  return (
    <Card.Meta 
      avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
      title={post.User.nickname}
      description={<PostCardContent postData={post.content} />}
    />
  );
};

/**
 * main PostCard
 * @param {post} Object data
 * @returns PostCard Container
 */
const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);

  const { removePostLoading } = useSelector((state) => state.post);
  const me = useSelector((state) => state.user.me); 
  const id = me && me.id;

  const dispatch = useDispatch();

  const handleToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const handleToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, []);

  const handleRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  return (
    <section className="post-card-container">
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          !liked ? (
            <HeartOutlined key="heart" onClick={handleToggleLike} />
          ) : (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="color-heart"
              onClick={handleToggleLike}
            />
          ),
          <MessageOutlined key="comment" onClick={handleToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.UserId === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <CardContent post={post} />
      </Card>
      {commentFormOpend && (
        <>
          <CommentForm post={post} />
          <CommentCard comments={post.Comments} />
        </>
      )}
    </section>
  );
};

export default PostCard;

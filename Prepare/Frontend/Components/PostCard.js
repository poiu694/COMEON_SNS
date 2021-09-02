import React, { useCallback, useState } from "react";
import { Avatar, Button, Card, Popover } from "antd";
import {
  EllipsisOutlined,
  RetweetOutlined,
  HeartOutlined,
  MessageOutlined,
  HeartTwoTone,
} from "@ant-design/icons";
import { useSelector } from "react-redux";

const Content = ({ post }) => {
  return (
    <Card.Meta 
      avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
      title={post.User.nickname}
      description={post.content}
    />
  );
};

const PostImages = ({ images }) => {
  return (
    <div> 구현중 </div>
  );
};

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [commentFormOpend, setCommentFormOpend] = useState(false);

  const id = useSelector((state) => state.user.me?.id);

  const handleToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, [liked]);

  const handleToggleComment = useCallback(() => {
    setCommentFormOpend((prev) => !prev);
  }, [commentFormOpend]);

  return (
    <section className="post-card-container">
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked ? (
            <HeartOutlined key="heart" onClick={handleToggleLike} />
          ) : (
            <HeartTwoTone twoToneColor="#eb2f96" key="color-heart" onClick={handleToggleLike}  />
          ),
          <MessageOutlined key="comment" onClick={handleToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
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
        <Content post={post} />
      </Card>
      { commentFormOpend && 
          <div>
            댓글
          </div>}
      {/* // <CommentForm />
      // <Comments /> */}
    </section>
  );
};

export default PostCard;
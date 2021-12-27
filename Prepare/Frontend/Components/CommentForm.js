import React, { useCallback, useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../Hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../Store/type";

const CommentForm = ({ post }) => {
  const [commentText, handleChangeCommentText, setCommentText] = useInput("");

  const dispatch = useDispatch();

  const id = useSelector(state => state.user.me?.id);
  const { addCommentDone, addCommentLoading } = useSelector(
    state => state.post,
  );

  const handleSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        content: commentText,
        userId: id,
        postId: post.id,
      },
    });
  }, []);

  useEffect(() => {
    if (addCommentDone) {
      setCommentText("");
    }
  }, [addCommentDone]);

  return (
    <Form className="comment-form-container" onFinish={handleSubmitComment}>
      <Input.TextArea
        value={commentText}
        onChange={handleChangeCommentText}
        rows={4}
      />
      <Button type="primary" htmlType="submit" loading={addCommentLoading}>
        댓글 달기
      </Button>
    </Form>
  );
};

export default CommentForm;

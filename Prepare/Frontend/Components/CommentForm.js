import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../Hooks/useInput";
import { useDispatch, useSelector } from "react-redux";
import { ADD_COMMENT_REQUEST } from "../Store/type";

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  const id = useSelector((state) => state.user.me?.id);
  const addCommentDone = useSelector((state) => state.post.addCommentDone);

  const handleSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: {
        content : commentText,
        userId: id,
        postId: post.id,
      }
    })
    setCommentText("");
  }, []);

  const handleChangeCommentText = useCallback((e) => {
    setCommentText(e.target.value);
  });

  return (
    <Form className="comment-form-container" onFinish={handleSubmitComment}>
      <Input.TextArea value={commentText} onChange={handleChangeCommentText} rows={4} />
      <Button type="primary" htmlType="submit"> 짹짹 </Button>
    </Form>
  )
};

export default CommentForm;

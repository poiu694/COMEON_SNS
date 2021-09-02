import React, { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import useInput from "../Hooks/useInput";
import { useDispatch } from "react-redux";

const CommentForm = ({ post }) => {
  const [commentText, setCommentText] = useState('');

  const dispatch = useDispatch();

  const handleSubmitComment = useCallback(() => {
    console.log(commentText, post.id);
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

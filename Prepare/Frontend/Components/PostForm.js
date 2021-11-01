import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { addPost } from "../Store/reducers/post";
import { ADD_POST_REQUEST } from "../Store/type";

const PreviewImagesForm = ({ imagePaths }) => {
  return (
    <div className="preview-container">
      {imagePaths.map((y) => {
        <div key={y} className="preview-images">
          <img src={y} alt={y} />
        </div>
      })}
    </div>
  );
}

const FileForm = ({ imagePaths, imageInput, setText, text }) => {
  const dispatch = useDispatch();

  const handleImageButton = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const handleSubmit = () => useCallback(() => {
    dispatch({
      type: ADD_POST_REQUEST,
      data: text,
    })
  }, [text]);

  return (
    <div className="file-container">
      <input type="file" multiple hidden ref={imageInput} />
      <Button onClick={handleImageButton}>이미지 업로드</Button>
      <Button
        type="primary"
        htmlType="submit"
        style={{ float: "right" }}
        onClick={handleSubmit}
      >
        짹짹
      </Button>
      <PreviewImagesForm imagePaths={imagePaths} />
    </div>
  );
};

/**
 * main PostForm
 * @returns Post Form container
 */
const PostForm = () => {
  const [text, setText] = useState("");
  const imageInput = useRef();

  const imagePaths = useSelector((state) => state.post.imagePaths);
  const dispatch = useDispatch();

  const handleFinish = useCallback(() => {
    dispatch(addPost);
  }, []);

  const handleChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  return (
    <Form
      className="post-form-container"
      encType="multipart/form-data"
      onFinish={handleFinish}
    >
      <Input.TextArea
        className="text-form"
        value={text}
        onChange={handleChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요 ?"
      />
      <FileForm
        imagePaths={imagePaths}
        imageInput={imageInput}
        setText={setText}
        text={text}
      />
    </Form>
  );
};

export default PostForm;

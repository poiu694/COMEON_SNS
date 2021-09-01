import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Input } from "antd";
import { addPost } from "../Store/reducers/post";

const PreviewImagesForm = ({ imagePaths }) => {
  return (
    <div className="preview-container">
      {imagePaths.map((y) => {
        <div key={y} style={{ display: 'inline-block' }}>
          <img src={y} style={{width: '200px'}} alt={y} />
        </div>
      })}
    </div>
  );
}

const FileForm = ({ imagePaths, imageInput, setText }) => {
  const handleImageButton = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const handleSubmit = () => {
    setText("");
  };

  return (
    <div>
      <input type="file" multiple hidden ref={imageInput} />
      <Button onClick={handleImageButton}>이미지 업로드</Button>
      <Button
        type="primary"
        htmlType="submit"
        style={{ float: "right" }}
        onClick={handleSubmit}
      >
        짹쨱
      </Button>
      <PreviewImagesForm imagePaths={imagePaths} />
    </div>
  );
};

const PostForm = () => {
  const [text, setText] = useState("");
  const imageInput = useRef();

  const imagePaths = useSelector((state) => state.post.imagePaths);
  const dispatch = useDispatch();

  const handleFinish = useCallback(() => {
    dispatch(addPost);
  }, []);

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <Form
      className="post-form-container"
      encType="multipart/form-data"
      onFinish={handleFinish}
    >
      <Input.TextArea
        value={text}
        onChange={handleChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요 ?"
      />
      <FileForm
        imagePaths={imagePaths}
        imageInput={imageInput}
        setText={setText}
      />
    </Form>
  );
};

export default PostForm;

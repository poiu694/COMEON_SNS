import React from "react";
import { List } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const CommentCard = ({ comments }) => {
  return (
    <List
      dataSource={comments}
      header={` ${comments.length}개의 댓글`}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta 
            avatar={<Avatar>{item.User.nickname[0]}</Avatar>} 
            title={item.User.nickname} 
            description={item.content}/>
        </List.Item>
      )}
    />
  );
};

export default CommentCard;

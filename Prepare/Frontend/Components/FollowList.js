import React from "react";
import { Button, Card, List } from "antd";
import { StopOutlined } from '@ant-design/icons';

const FollowList = ({ header, data }) => {
  return (
    <div className="follow-container">
      <List 
        className="list-container"
        grid={{gutter: 4, xs: 2, md: 3}}
        size="small"
        header={<div>{header}</div>}
        loadMore={<div className="more-btn"><Button> More </Button></div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
            <List.Item style={{ marginTop: '20px' }}>
              <Card actions={[<StopOutlined key="stop" />]}>
                <Card.Meta description={item.nickname} />
              </Card>
            </List.Item>
          )}
      />
    </div>
  )
};

export default FollowList;

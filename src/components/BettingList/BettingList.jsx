import React from "react";
import "./BettingList.css";
import { List } from "antd";
import { Link } from "react-router-dom";

export const BettingList = ({ data }) => {
  return (
    <div className="betting-list">
      <div className="container">
        <List
          size="large"
          itemLayout="horizontal"
          dataSource={data}
          bordered
          renderItem={(item) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <Link to={`/${item.id}`}>
                    {item.nameOne} - {item.nameTwo}
                  </Link>
                }
                description={item.date}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

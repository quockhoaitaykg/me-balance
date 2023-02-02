
import LoginComponent from '../../components/authen/login/login'
import RegisterComponent from '../../components/authen/register/register'
import React from 'react';
import { Layout } from "antd";
import { Tabs } from 'antd';
import { Card, Space } from 'antd';
import { Col, Row } from 'antd';

export default function Authen() {
  const { Content } = Layout
  const { Meta } = Card;
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: '1',
      label: `Login`,
      children: <LoginComponent />,
    },
    {
      key: '2',
      label: `Register`,
      children: <RegisterComponent />
    },
  ];
  return (
    <div className="space-align-container">
      <Space direction="horizontal" style={{ width: '70%', justifyContent: 'flex-end' }}>
        <Card bordered={false} style={{ width: 500, height: 600 }}>
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </Card>
      </Space>

    </div>
  );
}
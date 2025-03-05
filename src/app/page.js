"use client"
import '@ant-design/v5-patch-for-react-19';
import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
const steps = [
  {
    title: 'leader节点',
    content: '添加服务器',
  },
  {
    title: 'manager节点',
    content: '添加服务器',
  },
  {
    title: 'worker节点',
    content: '添加服务器',
  },
  {
    title: 'consul节点',
    content: '添加服务器',
  },
  {
    title: 'mysql节点',
    content: '添加服务器',
  },
  {
    title: 'redis节点',
    content: '添加服务器',
  },
  {
    title: '存储节点',
    content: '添加服务器',
  },
];

export default function Home() {
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));
  const contentStyle = {
    lineHeight: '260px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div
        style={{
          marginTop: 24,
        }}
      >
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            下一步
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            完成
          </Button>
        )}
        {current > 0 && (
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => prev()}
          >
            上一步
          </Button>
        )}
      </div>
    </>
  );
}
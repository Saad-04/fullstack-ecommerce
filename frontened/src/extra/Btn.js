import { HappyProvider } from '@ant-design/happy-work-theme';
import React from 'react';
import { Button, Space } from 'antd';

const Btn = ({title}) => (
  <Space
    style={{
      // padding: 24,
      borderRadius:'6px',
      marginTop:'5px',
      color:'white',
      backgroundColor:'purple',
    }}
    size="large"
  >
    <HappyProvider>
      <Button type="primary">{title}</Button>
    </HappyProvider>
  </Space>;
);
export default Btn

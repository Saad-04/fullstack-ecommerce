import React from 'react';
import { message } from 'antd';
import { logoutUser } from '../../fetchdata/fetchLogin';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {closeNav} from '../layouts/header/SideHeader.js'
const BtnLogout = () => {
  const dispatch = useDispatch()
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'Loaded!',
        duration: 2,
      });
      dispatch(logoutUser())
      closeNav()
      navigate('/products')
    }, 1000);
  };
  return (
    <>
      {contextHolder}
      <p onClick={openMessage}>
        Logout
      </p>
    </>
  );
};
export default BtnLogout;
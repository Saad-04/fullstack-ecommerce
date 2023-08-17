import { CgMoon } from 'react-icons/cg'
import { FaBlenderPhone, FaSistrix, FaExternalLinkAlt, FaUserCheck } from 'react-icons/fa'
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined

} from '@ant-design/icons';
import { Link } from "react-router-dom";
import { Button, Menu } from 'antd';
import { useSelector } from 'react-redux';
import BtnLogout from '../../User/BtnLogout';
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}


export let closeNav;//here we export this function because to close navbar in BtnLogout component when on click 

const Header = () => {
  const { isAuthenticated, user } = useSelector(state => state.users)
  const [bg, setBg] = useState('light')
  const [mode, setMode] = useState('Dark')
  const [positionSet, setpositionSet] = useState('-400px')
  const changeBg = () => {
    if (bg === 'dark') {
      setBg('light')
      setMode('Dark')
    } else {
      setBg('dark')
      setMode('Light')
    }
  }
  closeNav = () => {
    setpositionSet('-400px');
  }
  const items = [
    getItem(<p onClick={changeBg} >{mode}</p>, '1', <CgMoon />),//1
    ((isAuthenticated) ? getItem(<Link to='/profile' onClick={closeNav} >Profile</Link>, '2', <FaSistrix color='hsl(214, 84%, 59%)' />) : ''),//
    ((!isAuthenticated) ? getItem(<Link to='/login' onClick={closeNav} >Login</Link>, '3', <FaUserCheck color='lightgreen' />) : ('')),//2
    getItem(<Link to='/products' onClick={closeNav} >Products</Link>, '4', <FaBlenderPhone color='orangered' />),//3
    getItem(<Link to='/search' onClick={closeNav} >Search</Link>, '5', <FaSistrix color='cyan' />),//4
    getItem('Option 3', '6', <ContainerOutlined />),
    //this is admin section 
    ((isAuthenticated && user.role === 'admin') ? getItem('Admin Roles', 'sub1', <MailOutlined />, [
      getItem(<Link to='/dashboard' onClick={closeNav} >Dashboard</Link>), '8',
      getItem('Option 6'), '9',
    ]) : ''),
    //admin end
    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
      getItem('Option 9'), '11',
      getItem('Submenu', 'sub3', null, [
        getItem('Option 11'), '13'
      ]),
    ]),
    ((isAuthenticated) ? getItem(<BtnLogout />, '14', <FaExternalLinkAlt color='darkred' />) : (''))
  ];

  // add logout button 
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    if (collapsed) {
      setpositionSet('0')
    }
    if (!collapsed) {
      setpositionSet('-400px')
    }
  };
  return (
    <div
      style={{
        width: 256,
        position: "absolute",
        zIndex: 9,
        scrollBehavior: 'smooth',
        transition: "0.6s"
      }}
    >
      <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{
          marginBottom: 1,
          color: "gray",
          zIndex: 11,
          // position:'absolute'
        }}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>

      <Menu style={{ position: 'absolute', left: positionSet, zIndex: 10 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme={bg}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default Header;
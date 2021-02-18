import React from "react";
import { Menu, Button } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Logo, LogoContainer } from '../Logo/styles';
import classes from './navbar.module.css';

const Navbar = () => {
  return (
    // <div style={{width:"100%", height:"50px", padding: 8, borderBottom:"1px solid black"}}>
    //   <center><Button>Logo</Button></center>
    // </div>
    <Menu mode="horizontal">
      <Menu.Item key = "logo" className={classNames(classes.logo_item)}>
        <Link to="/">
          <Logo height="40px" width="200px" />
        </Link>
      </Menu.Item>
      <Menu.Item key = "login" icon={<MailOutlined />} style={{float: "right"}}>
        <Link to="/login">Login</Link>
      </Menu.Item>
    </Menu>
  );
}
export default Navbar;

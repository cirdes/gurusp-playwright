import React from "react";
import { Layout, Menu } from "antd";

const { Header } = Layout;

const menuItems = [
    {
        key: "1",
        label: "Home",
    },
    {
        key: "2",
        label: "Our Services",
    },
    {
        key: "3",
        label: "Contact",
    },
]

export default () => (
  <Header>
    <div className="logo" />
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} items={menuItems}>
      
    </Menu>
  </Header>
);
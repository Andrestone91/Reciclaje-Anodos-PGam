import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import css from "./index.css";

const burger = '/src/assets/burger.png';
const items: MenuProps['items'] = [
  {
    label: (
      <a href="https://www.antgroup.com" className={css.menu1} target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];

const OptionMenu: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
       <img className={css.imgBurger} src={burger} alt="" />
      </Space>
    </a>
  </Dropdown>
);

export {OptionMenu};
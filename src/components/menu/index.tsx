import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import css from "./index.css";

const burger = '/src/assets/burger.png';
const items: MenuProps['items'] = [
  {
    label: (
      <a href="#bienvenida" className={css.burgerText} rel="noopener noreferrer">
       Inicio
      </a>
    ),
    key: '0',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href="#nosotros" className={css.burgerText} rel="noopener noreferrer">
       Quienes somos
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: (
      <a href="#servicios" className={css.burgerText} rel="noopener noreferrer">
        Servicios
      </a>
    ),
    key: '2',
  },
   {
    type: 'divider',
  },
  {
    label: (
      <a href="#contacto" className={css.burgerText} rel="noopener noreferrer">
       Contacto
      </a>
    ),
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
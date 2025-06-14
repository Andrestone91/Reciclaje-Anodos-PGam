import React from 'react';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';
import css from "./index.css";

const burger = '/src/assets/burger.png';

const handleMenuNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

const items: MenuProps['items'] = [
  {
    label: (
      <a href="#bienvenida" className={css.burgerText} rel="noopener noreferrer" onClick={e => handleMenuNavClick(e, "bienvenida")}>
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
      <a href="#nosotros" className={css.burgerText} rel="noopener noreferrer" onClick={e => handleMenuNavClick(e, "nosotros")}>
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
      <a href="#servicios" className={css.burgerText} rel="noopener noreferrer" onClick={e => handleMenuNavClick(e, "servicios")}>
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
      <a href="#contacto" className={css.burgerText} rel="noopener noreferrer" onClick={e => handleMenuNavClick(e, "contacto")}>
       Contacto
      </a>
    ),
    key: '3',
  },
];

const OptionMenu: React.FC<{ scrolled?: boolean }>  = ({ scrolled }) => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
  <img
  className={`${css.imgBurger} ${scrolled ? css.imgBurgerWhite : css.imgBurgerBlack}`}
  src={burger}
  alt=""
/>
      </Space>
    </a>
  </Dropdown>
);

export {OptionMenu};
import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./index.css";
import { OptionMenu } from "components/menu";

function Header() {
// const logo = "src/assets/logo-muestra.jpg";
const logo = "/src/assets/logo-2.JPG";

  return (
    <div className={css["header-contenedor"]}>
      <a href="#bienvenida">
       <img src={logo} alt="" className={css["contenedor__img-logo"]} />
      </a>
    <div className={css["nav-custom"]}>
      <a href="#bienvenida" className={css["text-nav"]}>Inicio</a>
      <a href="#nosotros" className={css["text-nav"]}>Nosotros</a>
      <a href="#servicios" className={css["text-nav"]}>Servicios</a>
      <a href="#contacto" className={css["text-nav"]}>Contacto</a>
      {/* <a 
        href="https://www.facebook.com/profile.php?id=100046977355703" target="_blank"><img className="contacto__ico"src="./assets/social_facebook_fb_35.png"/>
      </a> */}
    </div>
    <div className={css.burger}>
      <OptionMenu />
    </div>
  </div>
  );
}

export { Header };

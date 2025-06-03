import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import css from "./index.css";
import { OptionMenu } from "components/menu";

function Header() {
// const logo = "src/assets/logo-muestra.jpg";
const logo = "/src/assets/logo-2.JPG";
const [show, setShow] = useState(true);
 const [scrolled, setScrolled] = useState(false);
const lastScrollY = useRef(0);
  const headerClass = [
    css["header-contenedor"],
    show ? css["show"] : css["hide"],
    scrolled ? css["scrolled"] : ""
  ].join(" ");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      if (window.scrollY < 50) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // Scroll hacia abajo, ocultar
      } else {
        setShow(true); // Scroll hacia arriba, mostrar
      }
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="inicio" className={headerClass}>
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

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, sectionId: string) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

  return (
    <div id="inicio" className={headerClass}>
      <a href="#bienvenida" onClick={e => handleNavClick(e, "bienvenida")}>
       <img src={logo} alt="" className={css["contenedor__img-logo"]} />
      </a>
    <div className={css["nav-custom"]}>
      <a href="#bienvenida" className={css["text-nav"]} onClick={e => handleNavClick(e, "bienvenida")}>Inicio</a>
      <a href="#servicios" className={css["text-nav"]} onClick={e => handleNavClick(e, "servicios")}>Servicios</a>
      <a href="#nosotros" className={css["text-nav"]} onClick={e => handleNavClick(e, "nosotros")}>Nosotros</a>
      <a href="#contacto" className={css["text-nav"]} onClick={e => handleNavClick(e, "contacto")}>Contacto</a>
      {/* <a 
        href="https://www.facebook.com/profile.php?id=100046977355703" target="_blank"><img className="contacto__ico"src="./assets/social_facebook_fb_35.png"/>
      </a> */}
    </div>
    <div className={css.burger}>
      <OptionMenu scrolled={scrolled}  />
    </div>
  </div>
  );
}

export { Header };

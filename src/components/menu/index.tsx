import React, { useRef, useEffect, useState } from "react";
import css from "./index.css";
import { Link } from "react-router-dom";
import { useItem } from "hooks";

const url = "https://jc-muebles-bff.vercel.app";
const urlLocal = "http://localhost:3000";

function Menu() {
  const [menu, setMenu] = useState(false);

  function toggleMenu() {
    setMenu(!menu);
  }
  // const [item, setItem] = useItem();
  // async function handlerClick() {
  //   const response = await fetch(urlLocal + "/api/products?limit=5");
  //   const data = await response.json();
  //   data.results.map((data) => {
  //     setItem([
  //       {
  //         nombre: data.Nombre,
  //         foto: data.Fotos,
  //         link: data.Link,
  //         precio: data.Precio,
  //       },
  //     ]);
  //   });
  // }

  // useEffect(() => {
  //   const hiddenEle = hidden.current;
  //   if (hiddenEle) {
  //     console.log(hiddenEle);
  //   }
  // });
  return (
    <div className={css.contenedor__menu}>
      <div className={css["contenedor-ul"]}>
        <ul className={css["ul-custom"]}>
          <li className={css["li-custom"]}>
            <Link className={css.link} to="/">
              Inicio
            </Link>
          </li>
          <li className={css["li-custom"]}>
            <Link className={css.link} to="/quienes-somos">
              Quienes Somos
            </Link>
          </li>

          <li className={css["li-custom"]}>
            <a className={`${css.link} ${css.categoria}`} onClick={toggleMenu}>
              Categorias
            </a>
            <div
              id={css["menu-animation"]}
              className={css["contenedor__menu-categoria"]}
              style={{
                display: menu ? "flex" : "none",
              }}
            >
              <Link className={css["li-text"]} to="/categorias/mesas">
                Mesas
              </Link>
              <Link className={css["li-text"]} to="/categorias/sillas">
                Sillas
              </Link>
              <a className={css["li-text"]} href="/index.html#grasa">
                Menu 3
              </a>
              <a className={css["li-text"]} href="/index.html#mantenimiento">
                Menu 4
              </a>
            </div>
          </li>

          <li className={css["li-custom"]}>
            <a className={`${css.link} ${css.galeria}`}>Servicios</a>

            <div className={css["contenedor__menu-galeria"]}></div>
          </li>
          <li className={css["li-custom"]}>
            <Link className={css.link} to="/contacto">
              Contacto
            </Link>
          </li>
          {/* pruebas */}
          <li className={css["li-custom"]}></li>
        </ul>
      </div>
    </div>
  );
}
export { Menu };

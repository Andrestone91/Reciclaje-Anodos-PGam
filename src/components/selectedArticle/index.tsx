import React, { useState } from "react";
import css from "./index.css";
import { SimpleSlider } from "components/carrusel";

function SelectedArticle(props) {
  const currentURL = window.location.href;
  const link =
    `https://wa.me/5491133768206?text=Hola,%20estoy%20interesado%20en%20este%20producto ` +
    currentURL;

  return props.slider ? (
    <div className={css.contenedor}>
      <h1 className={css.info__title}>{props.title}</h1>
      <SimpleSlider foto={props.slider}></SimpleSlider>
      <div className={css.contenedor__combo}>
        <div className={css.contenedor__header}>
          <h2 className={css.text__price}>{props.precio}</h2>
          <p
            className={css.en__stock}
            style={{
              background: props.status ? "#72ff72" : "rgb(233 73 73)",
              color: props.status ? "black" : "white",
              width: "46%",
            }}
          >
            {props.stock}
          </p>
          {props.status ? (
            <a href={link} target="_blank">
              <button className={css.boton}>lo quiero!</button>
            </a>
          ) : (
            <a href={link} target="_blank">
              <button disabled className={css.boton}>
                lo quiero!
              </button>
            </a>
          )}
        </div>
        <div className={css.contenedor__descripcion}>
          <h2>Descripcion:</h2>
          <p className={css.descripcion}>{props.descripcion}</p>
          <h2>caracteristicas:</h2>
          <div className={css.caracteristicas}>
            <div className={css.separador}>
              <p>Color: </p>
              <p>Medidas: </p>
              <p>Material: </p>
              <p>ideal: </p>
            </div>
            <div className={css.separador}>
              <p>{props.color}</p>
              <p>{props.medidas}</p>
              <p>{props.material}</p>
              <p>{props.ubicacion}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <p></p>
  );
}

export { SelectedArticle };

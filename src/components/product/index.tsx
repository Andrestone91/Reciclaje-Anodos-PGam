import React from "react";
import { useNavigate, Link } from "react-router-dom";
import css from "./index.css";

function Product(props) {
  return (
    <Link to={props.toUrl} className={css.textNoDecoration}>
      <div className={css.contenedor_product}>
        <img className={css["item-image"]} src={props.src} alt="item" />
        <div className={css.contenedor_product_description}>
          <h4>{props.title}</h4>
          <h3>$ {props.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export { Product };

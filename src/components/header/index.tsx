import React, { useState } from "react";
import { Link } from "react-router-dom";
import css from "./index.css";

function Header() {
  return (
    <div className={css.contenedor}>
      <h1>header</h1>
    </div>
  );
}

export { Header };

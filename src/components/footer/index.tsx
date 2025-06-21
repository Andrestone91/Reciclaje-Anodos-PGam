import React from "react";
import css from "./index.css";

function Footer() {
  const logo = "src/assets/logo.jpeg";
  return (
     <div className={css.footer}>
            
    <img className={css["img__footer"]} src={logo} alt="" />
     <div className={css.texto}>
         <p className={css.title}>Anodos PGam © 2025 </p>
        </div>
  </div>
  );
}

export { Footer };

import React from "react";
import css from "./index.css";

function Home() {
  // icon start
  // icon end
  return (
    <div className={css.bodyc}>
      <section id="bienvenida" className={css.bienvenida}>
        <div className={css["bienvenida_contenedor"]}>
          <div className={css["bienvenida__contenedor-text"]}>
            <h1 className={css["titulo-principal"]}>Bienvenidos a&nbsp;</h1>
             <h1 className={css["titulo-principal-animacion"]}>Reciclaje Anodos PGam</h1>
          </div>
        </div>
      </section>
      <section id="nosotros" className={css.nosotros}>
        <h1>Nosotros</h1>
      </section>
      <section id="servicios" className={css.servicios}>
        <h1>Servicios</h1>
      </section>
      <section id="contacto" className={css.contacto}>
        <h1>Contacto</h1>
      </section>
    </div>
  );
}
export { Home };

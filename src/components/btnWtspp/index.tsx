import React from "react";
import css from "./index.css";

function BotonWhatsapp() {
  const imgWhatsapp = "/src/assets/Whatsapp-3.png";

  return (
    <div className={css["btn-wsp"]}>
      <a
        href="https://api.whatsapp.com/send?phone=5491133768206"
        target="_blank"
      >
        <img className={css["img_whats"]} src={imgWhatsapp} />
      </a>
    </div>
  );
}

export { BotonWhatsapp };

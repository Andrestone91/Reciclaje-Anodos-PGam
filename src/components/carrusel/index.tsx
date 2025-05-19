import React, { useState } from "react";
import Slider from "react-slick";
import { useFotos } from "hooks";
import css from "./index.css";

function SimpleSlider(props) {
  var path: any = [];

  props.foto.map((data) => {
    return path.push(data);
  });

  // const [fotos, setFotos] = useFotos();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider className={css.contenedor} {...settings}>
      <div key={1}>
        <img className={css.img} src={path[0].thumbnails.full.url} alt="" />
      </div>
    </Slider>
  );
}

export { SimpleSlider };

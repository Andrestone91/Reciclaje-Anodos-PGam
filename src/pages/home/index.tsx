import React from "react";
import css from "./index.css";
import Slider from "react-slick";

// const settings = { dots: true, infinite: true, slidesToShow: 1, slidesToScroll: 1 };
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "gray" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "gray" }}
      onClick={onClick}
    />
  );
}
const img1 = "src/assets/portada-test-2.jpg";
const img2 = "src/assets/portada-test-3.jpg";
function Home() {
  // icon start
  // icon end
  const images = [
    "src/assets/portada-test-2.jpg",
    "src/assets/portada-test-3.jpg",]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={css.bodyc}>

    {/* bienvenida */}
      <section id="bienvenida" className={css.bienvenida}>
       <div className={css["slick-conatainer"]}>
         <Slider {...settings}>
          <div>
            <img src={img1} alt="" width="1580" height="740" style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "70vh"
                }}/>
          </div>
          <div>
            <img src={img2} alt="" width="1580" height="740" style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "70vh"
                }}/>
           </div>
        </Slider>
      </div>
        <div className={css["bienvenida_contenedor"]}>
          <div className={css["bienvenida__contenedor-text"]}>
            {/* <h1 className={css["titulo-principal"]}>Bienvenidos a&nbsp;</h1> */}
             <h1 className={css["titulo-principal"]}>Reciclaje Anodos PGam</h1>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className={css.nosotros}>
        <div className={css["descipcion__contenedor"]}>
             <h1 className={css["title_text"]}>Sobre nosotros</h1>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className={css.servicios}>
    <h1 className={css["title_text"]}>Servicios</h1>
      </section>

      {/* Contacto */}
      <section id="contacto" className={css.contacto}>
        <h1 className={css["title_text"]}>Contacto</h1>
      </section>
    </div>
  );
}
export { Home };

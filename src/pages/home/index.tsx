import React from "react";
import css from "./index.css";
import Slider from "react-slick";

// const settings = { dots: true, infinite: true, slidesToShow: 1, slidesToScroll: 1 };
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
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
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={css.bodyc}>
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
       <img src={img1} alt="" width="1580" height="740" style={{
                  objectFit: "cover",
                     width: "100%",
                   height: "70vh"
                }}/>
        </div>
      </Slider>
              {/* <Slider {...settings} className={css.carouselBg}>
          {images.map((src, i) => (
            <div key={i}>
              <img
                src={src}
                alt=""
                width="1580"
                  height="740"
                style={{
                  objectFit: "cover",
                  position: "absolute",
                   height: "70vh"
                }}
              />
            </div>
          ))}
        </Slider> */}
    </div>
        <div className={css["bienvenida_contenedor"]}>
          {/* <div className={css["bienvenida__contenedor-text"]}>
            <h1 className={css["titulo-principal"]}>Bienvenidos a&nbsp;</h1>
             <h1 className={css["titulo-principal-animacion"]}>Reciclaje Anodos PGam</h1>
          </div> */}
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

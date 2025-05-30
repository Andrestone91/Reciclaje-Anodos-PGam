import React from "react";
import css from "./index.css";
import Slider from "react-slick";

const img1 = "src/assets/portada-test-2.jpg";
const img2 = "src/assets/portada-test-3.jpg";
const icoMaps = "src/assets/maps.png";
const icoCorreo = "src/assets/correo.png";
const icoWhatsapp = "src/assets/whatsapp-2.png";
const icoFacebook = "src/assets/facebook.png";

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
          <div className={css["descripcion__contenedor_info"]}>
             <h1 className={css["title_text"]}>Sobre nosotros</h1>
               <p className={css["servicios__text"]} id="animacion__text-izq">
                Compramos anodos de titanio ,niquel para su reciclaje. Estamos en toda latinoamerica
                {/* <br />
                <br />
                 text
                <br />
                <br />
                 text */}
              </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className={css.servicios}>
           <div className={css["servicios__contenedor-info-y-video"]}>
        <div
          className={css["descripcion__contenedor_info"]}
          id="animacion__servicios-text"
        >
          <h1 className={css["title_text"]}>Servicios</h1>
          <p className={css["servicios__text"]}>
            ¿Desea vender sus catalizadores y/o raEES rápida y fácilmente?
            Entonces, lo que usted necesita es exactamente nuestro servicio de
            compra. Nuestro equipo de expertos clasificará el valor de su
            material con atención personalizada.
            <br />
            <br />
          </p>
        </div>
        <ul className={css["ul-custom"]}>
          <li>
            <div className={css["cont__serv"]}>
              <div>
                <img className={css["img__services"]} src="./assets/telefono.png" alt="" />
              </div>
              <div>Asesoría telefónica</div>
            </div>
          </li>
          <br />
          <li>
            <div className={css["cont__serv"]}>
              <div>
                <img
                  className={css["img__services"]}
                  src="./assets/evaluacion.png"
                  alt=""
                />
              </div>
              <div>Evaluación transparente con el catálogo</div>
            </div>
          </li>
          <br />
          <li>
            <div className={css["cont__serv"]}>
              <div>
                <img
                  className={css["img__services"]}
                  src="./assets/documento.png"
                  alt=""
                />
              </div>
              <div>Documentación (una vez conciliada la transacción)</div>
            </div>
          </li>
          <br />
          <li>
            <div className={css["cont__serv"]}>
              <div>
                <img
                  className={css["img__services"]}
                  src="./assets/liquidacion.png"
                  alt=""
                />
              </div>
              <div>
                Liquidación (usted recibirá el pago inmediato a través de
                nuestro equipo directamente en su sitio)
              </div>
            </div>
          </li>
        </ul>
        <div className={css["caja__servicios"]} id="animacion__caja-serv">
          <div className={css["caja__servicios-telefonica"]}>
            <div className={css["caja__servicios-img"]}>
              <img className={css["img__services"]} src="./assets/telefono-2.png" alt="" />
            </div>
            <h2 className={css["caja__servicios-text"]}>Asesoría telefónica</h2>
          </div>
          <div className={css["caja__servicios-catalogo"]}>
            <div className={css["caja__servicios-img"]}>
              <img
                className={css["img__services"]}
                src="./assets/evaluacion-2.png"
                alt=""
              />
            </div>
            <h2 className={css["caja__servicios-text"]}>Evaluación transparente</h2>
          </div>
          <div className={css["caja__servicios-Documentación"]}>
            <div className={css["caja__servicios-img"]}>
              <img className={css["img__services"]} src="./assets/documento.png" alt="" />
            </div>
            <h2 className={css["caja__servicios-text"]}>Documentación</h2>
          </div>
          <div className={css["caja__servicios-Liquidación"]}>
            <div className={css["caja__servicios-img"]}>
              <img
                className={css["img__services"]}
                src="./assets/liquidacion-3.png"
                alt=""
              />
            </div>
            <h2 className={css["caja__servicios-text"]}>Liquidación al instante</h2>
          </div>
        </div>
      </div>
      <div
        className={css["servicios__contenedor-info-y-video"]}
        style={{ paddingTop: "20px", gap: "75px" }}
      >
        {/* <div className={css["caja-video"]}>
          <video
            className={css["video-el"]}
            height="320"
            width="240"
            controls
            autoPlay
            muted
          >
            <source src="./assets/video.mp4" type="video/mp4" />
            tu navegador no es compatible con videos HTML5
          </video>
        </div> */}
        {/* <div className={css["slider"]}>
          <ul className={css["services__img-movil"]}>
            <li><img src="./assets/galeria-9-mid1.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-9-mid2.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-11.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-10.jpeg" alt="" /></li>
            <li><img src="./assets/galeria.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-12.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-8.jpeg" alt="" /></li>
          </ul>

          <ul className={css["services__img-desktop"]}>
            <li><img src="./assets/galeria-desktop-9.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-desktop-10.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-desktop-11.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-desktop-13.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-desktop.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-desktop-12.jpeg" alt="" /></li>
            <li><img src="./assets/galeria-desktop-8.jpeg" alt="" /></li>
          </ul>
        </div> */}
      </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className={css.contacto}>
        <h1 className={`${css["title_text"]} ${css["valores"]} ${css["contacto-text"]}`}>Contacto</h1>
        <div className={css["contenedor-contacto"]}>
          <div className={css["contenedor-contacto-text-y-ubi"]}>
            <div className={`${css["contacto__info"]} ${css["ubica"]}`}>
              <img className={css["contacto__ico"]} src={icoMaps} alt="" />

              <label className={`${css["servicios__text"]} ${css["info"]} ${css["label"]}`} 
                >UBICACION <br />
                <p className={css["text__ubi"]}>
                  Berazategui <br />
                  calle 142 A. nro 3026 <br />
                  e/ calle 30 y calle 31
                </p>
              </label>
            </div>
            <div className={css["contacto__info"]}>
              <img className={css["contacto__ico"]} src={icoCorreo} alt="" />
              <label className={`${css["servicios__text"]} ${css["info"]} ${css["label"]}`} 
                >EMAIL <br />
                <p className={css["text__ubi"]}>catmetal.arg@gmail.com</p>
              </label>
            </div>

            <div className={css["contacto__info"]}>
              <img className={css["contacto__ico"]} src={icoWhatsapp} alt="" />
              <label className={`${css["servicios__text"]} ${css["info"]} ${css["label"]}`}
                >TELEFONOS <br />
                <p className={css["text__ubi"]}>
                  +54 9 112257-2844 <br />
                  +54 9 115820-8081 <br />
                </p>
              </label>
            </div>

            <div className={css["contacto__info"]}>
              <img
                className={css["contacto__ico"]}
                src={icoFacebook}
                alt=""
              />
              <label className={`${css["servicios__text"]} ${css["info"]} ${css["label"]}`}>
                <a
                  className={css["links"]}
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=100046977355703"
                  >FACEBOOK <br />
                  Catmetal
                </a>
              </label>
            </div>
          </div>
          <div></div>

          <div className={css["maps__contenedor"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d819.2628809279151!2d-58.203388370800674!3d-34.779478197254576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328bc9d3decf5%3A0xe8831b70cc191bbe!2sC.%20142%20A%203026%2C%20B1860BGN%20Villa%20Espa%C3%B1a%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1668720656538!5m2!1ses!2sar"
              width="360"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={css["maps__contenedor-desktop"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5511.314801380485!2d-58.20530880187855!3d-34.77958232986839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328bc9d3decf5%3A0xe8831b70cc191bbe!2sC.%20142%20A%203026%2C%20B1860BGN%20Villa%20Espa%C3%B1a%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1669401162807!5m2!1ses!2sar"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={css["maps__contenedor-desktop-1500"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.051655703142!2d-58.2050298851428!3d-34.77947487432503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a328bc9d3decf5%3A0xe8831b70cc191bbe!2sC.%20142%20A%203026%2C%20B1860BGN%20Villa%20Espa%C3%B1a%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1669826233411!5m2!1ses!2sar"
              width="1000"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
export { Home };

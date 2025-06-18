import React, { useEffect, useRef, useState } from "react";
import css from "./index.css";
import Slider from "react-slick";

// assets
const img1 = "src/assets/portada-test-2.jpg";
const img2 = "src/assets/portada-test-3.jpg";
const fondo1 = "src/assets/fondo-1.webp";
const fondo2 = "src/assets/fondo-2.webp";
const fondo3 = "src/assets/fondo-3.webp";
const fondo4 = "src/assets/fondo-4.webp";
const icoTelefono = "src/assets/telefono-2.png";
const icoEvaluacion = "src/assets/evaluacion-2.png";
const icoDocumentacion = "src/assets/documento.png";
const icoLiquidacion = "src/assets/liquidacion-3.png";
const icoMaps = "src/assets/maps.png";
const icoCorreo = "src/assets/correo.png";
const icoWhatsapp = "src/assets/whatsapp-2.png";
const icoFacebook = "src/assets/facebook.png";
const fotoiridio = "src/assets/iridio.webp";
const fotoRutenio = "src/assets/rutenio.webp";
const fotoRodio = "src/assets/rodio.webp";
const fotoCatalizadorIridio = "src/assets/catalizador_de_iridio.webp";
const fotoCatalizadorRutenio = "src/assets/catalizador_de_rutenio.webp";
const fotoCatalizadorPaladio = "src/assets/catalizador_de_paladio.webp";
const restos1 = "src/assets/restos1.webp";
const restos2 = "src/assets/restos2.webp";
const restos3 = "src/assets/restos3.webp"; 

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

const reciclamosGridRef = useRef<HTMLDivElement>(null);
const [showReciclamosGrid, setShowReciclamosGrid] = useState(false);
const applRowRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];
const [showRows, setShowRows] = useState([false, false, false, false]);
  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = Number(entry.target.getAttribute("data-idx"));
          if (entry.isIntersecting) {
            setShowReciclamosGrid(true);
            // observer.disconnect();
                setShowRows(prev => {
            const updated = [...prev];
            updated[idx] = true;
            return updated;
          });
          }
        });
      },
      { threshold: 0.1 }
    );
     applRowRefs.forEach(ref => {
    if (ref.current) observer.observe(ref.current);
  });
    if (reciclamosGridRef.current) {
      observer.observe(reciclamosGridRef.current);
    }
    return () => observer.disconnect();
  }, []);
  
  return (
    <div className={css.bodyc}>

    {/* bienvenida */}
      <section id="bienvenida" className={css.bienvenida}>
       <div className={css["slick-conatainer"]}>
         <Slider {...settings}>
          <div>
            <img src={fondo2} alt="" width="1580" height="740" style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "70vh"
                }}/>
          </div>
          <div>
            <img src={fondo4} alt="" width="1580" height="740" style={{
                  width: "100%",
                  height: "70vh",
                  
                }}/>
           </div>
          <div>
            <img src={fondo1} alt="" width="1580" height="740" style={{
                  width: "100%",
                  height: "70vh",
                          objectFit: "cover",
                }}/>
           </div>
        </Slider>
      </div>
        <div className={css["bienvenida_contenedor"]}>
          <div className={css["bienvenida__contenedor-text"]}>
            {/* <h1 className={css["titulo-principal"]}>Bienvenidos a&nbsp;</h1> */}
             <h1 className={css["titulo-principal"]}>Reciclaje Anodos PGam</h1>
            <p className={css.subtitleText}>Centrándose en el reciclaje de restos de titanio y reciclaje de restos de níquel</p>
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className={css.nosotros}>
        <div className={css["descipcion__contenedor"]}>
          <div className={css["descripcion__contenedor_info"]}>
             <h1 className={css["title_text"]}>Sobre nosotros</h1>
               <p className={css["servicios__text"]} id="animacion__text-izq">
                 Somos un gran importador de reciclaje de metales en todo latinoamerica. Principalmente reciclamos y compramos los restos de titanio, incluidos la malla de titanio y la placa de titanio, los ánodos de titanio y los restos de malla de níquel, y el material, incluyendo Rutenio(Ru), iridio(Ir), Rodio.
                <br />
                {/* <br />
                 Compramos anodos de titanio ,niquel para su reciclaje. Estamos en toda latinoamerica.
                <br /> */}
                <br />
                Nuestra gama de productos es ampliamente, cubrir la recuperación, el refinación y el procesamiento de varios metales preciosos como la malla de titanio, las placas de titanio, la malla de níquel, el rutenio níquel, el platino chapado en níquel, etc., centrándose en proporcionar servicios OEM para empresas e individuos en todo el mundo. Con una artesanía exquisita y un estricto control de calidad, nuestros servicios de productos no solo son bien conocidos en el mercado interno, sino que también muestran una fuerte competitividad en el escenario internacional. These precious metal materials are widely used in chlor-alkali industry, aluminum foil, copper foil industry, industrial wastewater treatment, ion water production, electrochemical treatment of organic matter and organic electrochemical synthesis, electrolytic purification of gas, seawater desalination, oxidant regeneration and circulation, jewelry, electronics industry, aerospace, medical technology and other fields, injecting new vitality into the development of various industrias.
              </p>
          </div>
          {/* <div>
            2
          </div> */}
        </div>
      </section>

      {/* ¿Qué reciclamos? */}
      <section id="reciclamos" className={css.reciclamos}>
        <div className={css["descipcion__contenedor"]}>
          <div className={css["descripcion__contenedor_info"]}>
            <h1 className={css["title_text"]}>¿Qué reciclamos?</h1>
            <p className={css["servicios__text"]}>
              En Reciclaje Anodos PGam nos especializamos en la compra y reciclaje de materiales industriales de alto valor, ayudando a empresas y particulares a gestionar sus residuos de manera responsable y rentable.
            </p>
            <div  ref={reciclamosGridRef}   className={`${css["queReciclamosGrid"]} ${showReciclamosGrid ? css["queReciclamosGrid--show"] : ""}`}>
              <div className={css["queReciclamosItem"]}>
                <img src={fotoiridio} alt="iridio" className={css["queReciclamosImg"]} />
                <h2 className={css["queReciclamosTitle"]}>Reciclaje de iridio</h2>
                <p className={css["queReciclamosDesc"]}>
                  PGam espera convertirse en su socio de metal precioso más confiable, permitiendo que el chatarra de metales preciosos renace en el reciclaje profesional.
                </p>
              </div>
              <div className={css["queReciclamosItem"]}>
                <img src={fotoRutenio} alt="Rutenio" className={css["queReciclamosImg"]} />
                <h2 className={css["queReciclamosTitle"]}>Reciclaje de rutenio</h2>
                <p className={css["queReciclamosDesc"]}>
                  PGam recicla activamente chatarra de Ruthenium, y puede extraer Ruthenium. A partir de los desechos de reutilización, reduciendo la minería de los recursos naturales de rutenio y la realización del reciclaje de los recursos.
                </p>
              </div>
              <div className={css["queReciclamosItem"]}>
                <img src={fotoRodio} alt="Rodio" className={css["queReciclamosImg"]} />
                <h2 className={css["queReciclamosTitle"]}>Reciclaje de rodio</h2>
                <p className={css["queReciclamosDesc"]}>
                    El reciclaje de residuos de rodio puede reducir esta contaminación. Al mismo tiempo, Rhodium juega un papel importante en la purificación de escape del automóvil y otros aspectos, lo que ayuda a proteger el medio ambiente.
                </p>
              </div>
              <div className={css["queReciclamosItem"]}>
                <img src={fotoCatalizadorIridio} alt="Catalizadoriridio" className={css["queReciclamosImg"]} />
                <h2 className={css["queReciclamosTitle"]}>Reciclaje de catalizador de Ridio</h2>
                <p className={css["queReciclamosDesc"]}>
                  PGam espera convertirse en su reciclaje de metales preciosos más confiables, permitiendo que el chatarra de metales preciosos renace en el reciclaje profesional.
                </p>
              </div>
              <div className={css["queReciclamosItem"]}>
                <img src={fotoCatalizadorRutenio} alt="CatalizadorRutenio" className={css["queReciclamosImg"]} />
                <h2 className={css["queReciclamosTitle"]}>Reciclaje de catalizador de Rutenio</h2>
                <p className={css["queReciclamosDesc"]}>
                  El reciclaje de catalizadores de rutenio puede aliviar la contradicción entre la oferta de recursos y la demanda hasta cierto punto y garantizar el desarrollo estable de las industrias relacionadas.
                </p>
              </div>
              <div className={css["queReciclamosItem"]}>
                <img src={fotoCatalizadorPaladio} alt="CatalizadorPaladio" className={css["queReciclamosImg"]} />
                <h2 className={css["queReciclamosTitle"]}>Reciclaje de catalizador de Paladio</h2>
                <p className={css["queReciclamosDesc"]}>
                   A medida que la demanda de rutenio en nuevas industrias de energía, batería y química continúa aumentando, el suministro de 
                </p>
              </div>
          </div>
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
            ¿Desea vender sus catalizadores rápida y fácilmente?
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
                <img className={css["img__services"]} src={icoTelefono} alt="" />
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
              <img className={css["img__services"]} src={icoTelefono} alt="" />
            </div>
            <h2 className={css["caja__servicios-text"]}>Asesoría telefónica</h2>
          </div>
          <div className={css["caja__servicios-catalogo"]}>
            <div className={css["caja__servicios-img"]}>
              <img
                className={css["img__services"]}
                src={icoEvaluacion}
                alt=""
              />
            </div>
            <h2 className={css["caja__servicios-text"]}>Evaluación transparente</h2>
          </div>
          <div className={css["caja__servicios-Documentación"]}>
            <div className={css["caja__servicios-img"]}>
              <img className={css["img__services"]} src={icoDocumentacion} alt="" />
            </div>
            <h2 className={css["caja__servicios-text"]}>Documentación</h2>
          </div>
          <div className={css["caja__servicios-Liquidación"]}>
            <div className={css["caja__servicios-img"]}>
              <img
                className={css["img__services"]}
                src={icoLiquidacion}
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

    <section className={css.applWrap}>
          <div className={css.applContainer}>
    
  <div className={css["descripcion__contenedor_info"]}>
    <h1 className={`${css["title_text"]} ${css.titleRestos}`}>Aplicaciones de las industrias de los restos de metal</h1>

    {/* Primer bloque: imagen izquierda, texto derecha */}
    <div className={`${css.applRow} ${showRows[0] ? css.applRowShow : ""}`} style={{ marginTop: "50px" }} ref={applRowRefs[0]} data-idx={0}>
      <div className={css.applImgBox}>
        <img src={restos1} alt="Industria química" className={css.applImgBig} />
      </div>
      <div className={css.applInfo}>
        <h3 className={css.applItemTitle}>Anodes de titanio se destrozan de la electrólisis de lámina de cobre</h3>
        <p className={css.applItemDesc}>
           En el proceso de electrólisis de aluminio de cobre, las placas de titanio se usan como ánodo y juega un papel vital.Estamos dedicados a reciclar los restos del ánodo de titanio de la industria de la electrólisis de aluminio.Podemos proporcionar un servic
        </p>
      </div>
    </div>

    {/* Segundo bloque: imagen derecha, texto izquierda */}
    <div   ref={applRowRefs[1]}
  data-idx={1}
  className={`${css.applRow} ${css.applRowReverse} ${showRows[1] ? css.applRowShow : ""}`}>
      <div className={css.applImgBox}>
        <img src={restos2} alt="Electroquímica" className={css.applImgBig} />
      </div>
      <div className={css.applInfo}>
        <h3 className={css.applItemTitle}>Fraspes del ánodo de titanio de electrolizeros de membrana iónica</h3>
        <p className={css.applItemDesc}>
          Huatuo comprende profundamente la importancia de la responsabilidad social corporativa y practica activamente el concepto de desarrollo sostenible. Estamos comprometidos con la protección del medio ambiente, implementamos estrictos estándares de protecció
        </p>
      </div>
    </div>

    {/* Tercer bloque: imagen izquierda, texto derecha */}
    <div   ref={applRowRefs[2]}
          data-idx={2}
           className={`${css.applRow} ${showRows[2] ? css.applRowShow : ""}`}>
      <div className={css.applImgBox}>
        <img src={restos3} alt="Energía" className={css.applImgBig} />
      </div>
      <div className={css.applInfo}>
        <h3 className={css.applItemTitle}>Titanium Meshes Scraps de la producción de placa de circuito impreso</h3>
        <p className={css.applItemDesc}>
          Estamos dedicados a reciclar la chatarra del ánodo de titanio de la producción de placa de circuito impreso.A través de procesos de reciclaje y procesamiento profesionales, extraemos y reutilizamos los componentes valiosos, reduciendo así los costos de p
        </p>
      </div>
    </div>
  </div>
  </div>
</section>

      {/* valores */}
      <section className={css["section-valores"]}>
          <div className={css["descripcion__contenedor_info"]}>
         <h1 className={`${css["title_text"]} ${css.valoresTitle}`}>Nuestra misión y visión</h1>
            <p className={`${css["servicios__text"]} ${css.valoresDesc}`}>
               Alto valor agregado, contenido de alta tecnología, amplias áreas de aplicación y demandas estables del mercado.
            <br />
            <br />
          </p>
         <div className={css["contenedor__widget"]} id="animacion__widget">
           <div className={css.widget}>
             <h2 className={css["sub__title"]}>Valores</h2>
             <p className={css["valores__texto-widget"]}>Innovación, colaboración, integridad y doble victoria.</p>
           </div>
           <div className={css.widget}>
             <h2 className={css["sub__title"]}>Misiones</h2>
             <p className={css["valores__texto-widget"]}>Explorando restos preciosos y creando brillantez.</p>
           </div>
           <div className={css.widget}>
             <h2 className={css["sub__title"]}>Visiones</h2>
             <p className={css["valores__texto-widget"]}>Perseguir la excelencia y nunca terminar.</p>
           </div>
         </div>
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
                 localidad <br />
                 calle Uruguay <br />
                 
                </p>
              </label>
            </div>
            <div className={css["contacto__info"]}>
              <img className={css["contacto__ico"]} src={icoCorreo} alt="" />
              <label className={`${css["servicios__text"]} ${css["info"]} ${css["label"]}`} 
                >EMAIL <br />
                <p className={css["text__ubi"]}>pgmreciclaje@gmail.com</p>
              </label>
            </div>

            <div className={css["contacto__info"]}>
              <img className={css["contacto__ico"]} src={icoWhatsapp} alt="" />
              <label className={`${css["servicios__text"]} ${css["info"]} ${css["label"]}`}
                >TELEFONOS <br />
                <p className={css["text__ubi"]}>
                  {/* +54 9 112257-2844 <br /> */}
                  {/* +54 9 115820-8081 <br /> */}
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

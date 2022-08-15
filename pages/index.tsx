import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
const Home: NextPage = () => {
  return (
    <>
      <header>
        <div id="home" className="header-area">
          <div className="main-header header-sticky">
            <div className="container-fluid">
              <div className="row">
                <div className="menu-wrapper align-items-center justify-content-between">
                  <div className="header-left d-flex align-items-center">
                    <div className="logo">
                      <div className="logo_gradient">
                        <a href="index.html">
                          <img src="/img/logo/logo_image.png" width="100px" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="logo2">
                      <div className="logo_gradient">
                        <a href="index.html">
                          <img src="/img/logo/logo_image.png" width="100px" alt="" />
                        </a>
                      </div>
                    </div>
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">
                          <li>
                            <a href="#home"><span className="home">Inicio</span></a>
                          </li>
                          <li>
                            <a href="#services"
                            ><span className="services">Servicio</span></a>
                          </li>
                          <li>
                            <a href="#aliance"
                            ><span className="aliance">Alianzas</span></a>
                          </li>
                          <li>
                            <a href="#technologies"
                            ><span className="technologies">Tecnologías</span></a>
                          </li>
                          <li>
                            <a href="#quote"
                            ><span className="quote">Cotizador</span></a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="header-right1 d-flex align-items-center">
                    <div className="tracking_container">
                      <input id="tracking_code" type="text" placeholder="Tracking" />
                      {/*  onclick="search()" */}
                      <button>
                        <img src="/img/icon/search.svg" />
                      </button>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div id="home" className="slider-area">
          <div className="slider-active">
            <div
              className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg1"
            >
              <div className="container slider_card">
                <div className="row no-gutters align-items-center slider_card_container">
                  <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                    <div className="hero-caption-left ucorreo_gradient">
                      <h1 data-animation="bounceIn" data-delay=".4s">
                        Encuentra la paz interior en el servicio profesional
                    </h1>
                      <div className="hero__btn" data-animation="fadeInUp" data-delay=".7s">
                        <a href="https://www.31track.com/" target="_blank" className="border-btn hero-btn">
                          Haga clic para referencia
                      </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                    <div className="hero-caption-right">
                      <img className="icon" src="/img/icon/favicon.png" alt="" />
                      <h2 data-animation="fadeInUp" data-delay=".3s">
                        Las soluciones de rastreo de uCorreos muestran el progreso
                        de su envío en cada paso del camino, a través de la ciudad
                        o alrededor del continente
                    </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg2"
            >
              <div className="container slider_card">
                <div className="row no-gutters align-items-center slider_card_container">
                  <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                    <div className="hero-caption-left ucorreo_gradient" >
                      <h1 data-animation="bounceIn" data-delay=".4s">
                        Vamos a donde quieras llegar
                    </h1>
                      <div className="hero__btn" data-animation="fadeInUp" data-delay=".7s" >
                        <a href="https://mailamericas.com/covid-19" target="_blank" className="border-btn hero-btn" >
                          Haga clic para referencia
                      </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                    <div className="hero-caption-right">
                      <img className="icon" src="/img/icon/favicon.png" alt="" />
                      <h2 data-animation="fadeInUp" data-delay=".3s">
                        Brindamos Soluciones alternativas de Cross boarder E
                        commerce, Consolidación y Transporte internacional
                    </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="single-slider hero-overly1 slider-height d-flex align-items-center slider-bg3"
            >
              <div className="container slider_card">
                <div className="row no-gutters align-items-center slider_card_container">
                  <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6">
                    <div className="hero-caption-left ucorreo_gradient" >
                      <h1 data-animation="bounceIn" data-delay=".4s">
                        Mantenga su negocio funcionando sin problemas
                    </h1>
                      <div className="hero__btn" data-animation="fadeInUp" data-delay=".7s" >
                        <a href="#services" className="border-btn hero-btn" >
                          Haga clic para referencia
                      </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                    <div className="hero-caption-right">
                      <img className="icon" src="assets/img/icon/favicon.png" alt="" />
                      <h2 data-animation="fadeInUp" data-delay=".3s">
                        Transporte de calidad y excelencia para potenciar su
                        negocio
                    </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="home" className="about-area section-padding gray-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-10">
                <div className="about-caption">
                  <div className="section-tittle section-tittle3">
                    <h2>
                      Soluciones
                  </h2>
                  </div>
                  <div className="support-caption">
                    <p className="pera-top" style={{ fontWeight: 700 }}>Contamos con una amplia gama de soluciones para su negocio.</p>
                  </div>
                </div>
              </div>
              <div className="offset-xl-1 col-xl-7 col-lg-6 7ol-md-10">
                <div className="about-blog">
                  <div className="single-offers d-flex mb-20" style={{ boxShadow: "4px 4px 8px 0 #d9d9d9, 0 6px 20px 0 #d9d9d9" }}>
                    <div className="icon" style={{ marginTop: "45px" }}>
                      <img src="/img/elements/experience.png" alt="this icon" className="icon-border" />
                    </div>
                    <div className="offers-cap">
                      <h3><a href="#">Amplia experiencia</a></h3>
                      <p>
                        Con diez años de experiencia en logística de comercio
                        electrónico transfronterizo en países latinoamericanos,
                        uCorreos ha ayudado a cientos de empresas a desarrollar
                        sus negocios de comercio electrónico durante el período de
                        rápido crecimiento del comercio electrónico en América
                        Latina.
                    </p>
                    </div>
                  </div>
                  <div className="single-offers d-flex mb-20" style={{ boxShadow: "4px 4px 8px 0 #d9d9d9, 0 6px 20px 0 #d9d9d9" }}>
                    <div className="icon">
                      <img src="/img/elements/serviceLevel.png" alt="this icon" className="icon-border" />
                    </div>
                    <div className="offers-cap">
                      <h3><a href="#">Niveles de servicio</a></h3>
                      <p>
                        uCorreos ofrece varios niveles de servicio, ya sean
                        vendedores individuales o corporaciones gigantes.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="visit-tailor-area fix tailor_gradient">
          <div className="tailor-details-fader">
            <div className="tailor-details">
              <h2 style={{ marginBottom: "40px" }}>Le damos el control completo <br />de sus envíos.</h2>
              <div className="sinlge-wrapper">
                <div className="single-details" style={{ width: "369px", height: "211px" }}>
                  <h3>Soluciones Logísticas</h3>
                  <p>
                    Nuestra misión es brindar soluciones logísticas personalizadas y
                    confiables a otras empresas de logística, plataformas de
                    comercio electrónico y vendedores en línea.
              </p>
                </div>
                <div className="single-details" style={{ width: "369px", height: "165px" }}>
                  <h3>Seguridad y confiabilidad</h3>
                  <p>
                    El servicio de uCorreos es excepcional. Las soluciones que
                    ofrecemos son visibilidad, solvencia, confiabilidad.
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section id="services" className="sercices-area section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-11">
                <div className="section-tittle text-center mb-60">
                  <h2>Nuestros Servicios</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="properties mb-40">
                  <div className="properties-card">
                    <div className="properties-img">
                      <span>
                        <img src="/img/gallery/services1.jpg" alt="" />
                      </span>
                    </div>
                    <div>
                      <h3>
                        <p className="service_card_number">01</p>
                        <span className="service_card_header">Soluciones eCommerce</span>
                      </h3>
                      <p>
                        Descubra nuestras soluciones de
                      <strong>Cross Border B2C </strong>para la industria global
                      de Comercio Electrónico.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="properties mb-40">
                  <div className="properties-card">
                    <div className="properties-img">
                      <span
                      ><img src="/img/gallery/services2.jpg" alt=""
                        /></span>
                    </div>
                    <div>
                      <h3>
                        <p className="service_card_number">02</p>
                        <span className="service_card_header">Aéreo y Marítimo Conveyance</span>
                      </h3>
                      <p>
                        Descubra las mejores soluciones de envío aéreo y marítimo
                        para su negocio.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="properties mb-40">
                  <div className="properties-card">
                    <div className="properties-img">
                      <span
                      ><img src="/img/gallery/services3.jpg" alt=""
                        /></span>
                    </div>
                    <div>
                      <h3>
                        <p className="service_card_number">03</p>
                        <span className="service_card_header">Servicio de Almacén</span>
                      </h3>
                      <p>
                        Warehouses ubicados estratégicamente para brindarle
                        servicios seguros y eficientes.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="quote" className="contact-form-area gray-bg fix" style={{ paddingBottom: "60px", paddingTop: "60px" }}>
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-4 col-lg-5">
                <div className="contact-caption">
                  <div className="section-tittle section-tittle3">
                    <h2>Cotizador</h2>
                    <p style={{ color: "#1d2547", fontWeight: 700 }}>
                      Cuéntenos sobre sus necesidades de envío a gran escala y nos
                      pondremos en contacto con usted.
                  </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-xxl-7 col-lg-7">
                <div className="contact-form-wrapper" style={{ borderColor: "#175898" }}>

                  {/* onsubmit="return onSubmit()" */}
                  <form
                    action="#"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="select-Categories">
                        <label className="containers">
                          Marítimo
                        <input
                            id="shipmentType"
                            value="sea"
                            type="checkbox"
                            className="chb"
                          />
                          <span className="checkmark form_background_color"></span>
                        </label>
                        <label className="containers">
                          Aéreo
                        <input
                            id="shipmentType"
                            type="checkbox"
                            className="chb"
                            value="aerial"
                          />
                          <span className="checkmark form_background_color"></span>
                        </label>
                        <label className="containers">
                          Terrestre
                        <input
                            id="shipmentType"
                            type="checkbox"
                            className="chb"
                            value="land"
                          />
                          <span className="checkmark form_background_color"></span>
                        </label>
                      </div>

                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-form">
                          <label>Nombre y apellidos *</label>
                          <input
                            type="text"
                            id="name"
                            required
                            placeholder="Pepe Pérez Pérez"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-form">
                          <label>Peso o Volumen</label>
                          <input
                            id="weight-or-volume"
                            placeholder="0"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-form">
                          <label>Correo electrónico *</label>
                          <input
                            type="email"
                            id="email"
                            required
                            placeholder="correo@electrónico.com"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-form">
                          <label>Número de teléfono *</label>
                          <input
                            type="text"
                            id="phone_number"
                            required
                            placeholder="+1 (123) 445-6789"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-form">
                          <label>País de origen *</label>
                          <input
                            type="text"
                            id="origin_country"
                            required
                            placeholder="EEUU"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className="input-form">
                          <label>País de destino *</label>
                          <input
                            type="text"
                            id="destination_country"
                            required
                            placeholder="México"
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <button name="submit" className="submit-btn2" style={{ backgroundColor: "#00a9e7" }}>
                          Cotizar
                      </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="aliance" className="testimonial-area section-bg1">
          <div className="container">
            <div className="testimonial-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle text-center mb-50">
                    <h2>Alianzas</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11">
                  <div className="section_header">
                    <div className="section_text">
                      <div style={{ color: "#175898", fontSize: "25px" }}><strong>Nuestros Clientes</strong></div>
                    </div>
                  </div>
                  <div className="logos_row">
                    <div style={{ display: "flex" }}>
                      <a
                        style={{ display: "flex" }}
                        href="https://shopee.com/"
                        target="_blank"
                        className="image_link"
                      >
                        <img
                          src="/img/icon/shopee.svg"
                          width="222px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex" }}>
                      <a
                        style={{ display: "flex" }}
                        href="https://mercadolibre.com/"
                        target="_blank"
                        className="image_link"
                      >
                        <img
                          src="/img/icon/mercadolibre.png"
                          width="222px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <a
                        style={{ display: "flex" }}
                        href="https://es.shopify.com/"
                        target="_blank"
                        className="image_link"
                      >
                        <img
                          src="/img/icon/shopify.png"
                          width="222px"
                          height="48px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "57px" }}>
                      <a
                        style={{ display: "flex" }}
                        href="https://www.linio.com.co/"
                        target="_blank"
                        className="image_link"
                      >
                        <img
                          src="/img/icon/linio.png"
                          width="222px"
                          height="42px"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
                <div
                  className="col-xl-12 col-lg-12 col-md-12 col-sm-11 partners"
                  style={{ marginTop: "100px" }}
                >
                  <div className="section_header">
                    <div className="section_text">
                      <div style={{ color: "#175898", fontSize: "25px" }}><strong>Nuestros Partners</strong></div>
                    </div>
                  </div>
                  <div className="logos_row">
                    <div style={{ display: "flex" }}>
                      <a
                        href="https://www.masair.com/"
                        style={{ display: "flex", alignItems: "center" }}
                        className="image_link"
                      >
                        <img
                          src="/img/icon/masair.png"
                          width="222px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex" }}>
                      <a
                        href="https://www.qatarairways.com/en/homepage.html"
                        style={{ display: "flex", alignItems: "center" }}
                        className="image_link"
                      >
                        <img
                          src="/img/icon/qatar.png"
                          width="222px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
                      <a
                        href="https://www.latamairlines.com/cl/es"
                        style={{ display: "flex", alignItems: "center" }}
                        className="image_link"
                      >
                        <img
                          src="/img/icon/latam.png"
                          width="222px"
                          height="48px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
                      <a
                        href="https://www.britishairways.com/travel/home/public/es_es/"
                        style={{ display: "flex", alignItems: "center" }}
                        className="image_link"
                      >
                        <img
                          src="/img/icon/britishairways.png"
                          width="222px"
                          height="42px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
                      <a
                        href="https://www.31track.com/"
                        style={{ display: "flex", alignItems: "center" }}
                        className="image_link"
                      >
                        <img
                          src="/img/icon/31track.svg"
                          width="222px"
                          height="69"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="technologies"
          className="testimonial-area section-bg1"
          style={{ backgroundColor: "#f1fbff" }}
        >
          <div className="container">
            <div className="testimonial-wrapper">
              <div className="row mb-50">
                <div className="col-lg-12">
                  <div className="section-tittle text-center mb-50">
                    <h2>Tecnologías</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-xl-6 col-lg-6">
                  <div style={{ height: "454px", marginBottom: "40px" }}>
                    <h1>
                      <strong>Tecnología de punta</strong>
                    </h1>
                    <h4 style={{ marginTop: "20px", color: "rgb(23, 88, 152)" }}><strong>Siempre conectados</strong></h4>
                    <div style={{ marginTop: "40px", textAlign: "justify", fontWeight: 600 }}>
                      Contamos con la última tecnología en sistemas de seguimiento
                      de paquetería y procesamiento de información para crear la
                      mejor experiencia para nuestros clientes.
                  </div>
                    <div style={{ marginTop: "20px", textAlign: "justify", fontWeight: 600 }}>
                      Pregunte a cualquier persona que envíe o reciba un paquete
                      qué es importante y escuchará la confiabilidad. Por eso,
                      creamos una tecnología de seguimiento que le permite ver,
                      resolver y cumplir con las expectativas, localmente,
                      globalmente, por paquete y envío.
                  </div>
                  </div>
                  <img
                    src="/img/post/technology2.png"
                    style={{ height: "454px", maxWidth: "100%" }}
                    alt=""
                  />
                </div>
                <div className="col-xl-6 col-lg-6" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <img
                    src="/img/post/technology.png"
                    style={{ height: "454px", maxWidth: "100%" }}
                    alt=""
                  />
                  <div style={{ height: "454px", marginTop: "40px" }}>
                    <h1>
                      <strong>Business Intelligence</strong>
                    </h1>
                    <h4 style={{ marginTop: "20px", color: "rgb(23, 88, 152)" }}><strong>Siempre un paso adelante</strong></h4>
                    <div style={{ marginTop: "40px", textAlign: "justify", fontWeight: 600 }}>
                      La solución de seguimiento adecuada
                  </div>
                    <div style={{ marginTop: "20px", textAlign: "justify", fontWeight: 600 }}>
                      Ya sea personalizar 10 atuendos para un artista local o
                      equipar el gimnasio con una gran máquina de entrenamiento,
                      todo depende de su capacidad para entregar y rastrear su
                      paquete. Pero la información de estado requerida para
                      procesar las dos confirmaciones es bastante diferente. Es
                      por eso que hemos desarrollado una variedad de herramientas
                      de seguimiento que le brindan exactamente la información que
                      necesita, cuándo y dónde la necesita. Así que puedes
                      saltarte esos disfraces e ir al teatro antes del nuevo
                      ensayo. O estimar la entrega de equipos de fitness.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-logo mb-35">
                        <a href="index.html"
                        ><img
                            src="/img/logo/logo_image.png"
                            width="93px"
                            alt=""
                          /></a>
                      </div>
                      <div
                        className="footer-social col-xl-6 col-lg-8 col-md-12 col-sm-12"
                      >
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                          `
                        <a href="#"><i className="fa fa-map-marker-alt"></i></a>
                        </div>
                        <div
                          className="footer-pera col-xl-9 col-lg-9 col-md-9 col-sm-9"
                        >
                          <p>
                            Humboldt 56, Colonia Centro, Cuauhtemoc, CP: 06000,
                            Ciudad de México
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="offset-xl-1 offset-lg-1 col-xl-2 col-lg-2 col-md-4 col-sm-4"
                >
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Enlaces</h4>
                      <ul>
                        <li><a href="#services">Servicios</a></li>
                        <li><a href="#aliance">Alianzas</a></li>
                        <li><a href="#technologies">Tecnologías</a></li>
                        <li><a href="#quote">Cotizador</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12">
                    <div className="footer-copy-right text-center text-white">
                      Copyright &copy; {new Date().getFullYear()} Todos los derechos reservados
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    <div id="back-top" style={{backgroundColor: "#00a9e7"}}>
      <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
    </div>
    </>
  )
}

export default Home

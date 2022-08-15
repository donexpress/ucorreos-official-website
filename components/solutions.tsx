export const Solutions = () => {
    return (
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
    )
}
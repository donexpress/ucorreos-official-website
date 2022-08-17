import Image from "next/image"

export const Services =() => {
    return (
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
                        <Image width="436.8px" height="301.65px" src="/img/gallery/services1.jpg" alt="" />
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
                      ><Image width="436.8px" height="301.65px" src="/img/gallery/services2.jpg" alt=""
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
                      ><Image width="436.8px" height="301.65px" src="/img/gallery/services3.jpg" alt=""
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
    )
}
import Image from "next/image"
import { useTranslation } from "react-i18next";

export const Alliances = () => {
    const { t } = useTranslation();
    return (
        <section id="aliance" className="testimonial-area section-bg1">
          <div className="container">
            <div className="testimonial-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle text-center mb-50">
                    <h2>{t('aliance') as string}</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11">
                  <div className="section_header">
                    <div className="section_text">
                      <div style={{ color: "#175898", fontSize: "25px" }}><strong>{t('our_clients') as string}</strong></div>
                    </div>
                  </div>
                  <div className="logos_row">
                    <div style={{ display: "flex" }}>
                      <a
                        style={{ display: "flex" }}
                        href="https://shopee.com/"
                        target="_blank"
                        className="image_link"
                        rel="noreferrer" 
                      >
                        <Image
                          src="/img/icon/shopee.svg"
                          width="222px"
                          height="139.66px"
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
                        rel="noreferrer" 
                      >
                        <Image
                          src="/img/icon/mercadolibre.png"
                          width="222px"
                          height="139.66px"
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
                        rel="noreferrer"
                      >
                        <Image
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
                        rel="noreferrer"
                      >
                        <Image
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
                      <div style={{ color: "#175898", fontSize: "25px" }}><strong>{t('our_partners') as string}</strong></div>
                    </div>
                  </div>
                  <div className="logos_row">
                    <div style={{ display: "flex" }}>
                      <a
                        href="https://www.masair.com/"
                        style={{ display: "flex", alignItems: "center" }}
                        className="image_link"
                      >
                        <Image
                          src="/img/icon/masair.png"
                          width="222px"
                          height="108px"
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
                        <Image
                          src="/img/icon/qatar.png"
                          width="222px"
                          height="116.41px"
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
                        <Image
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
                        <Image
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
                        <Image
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
    )
}
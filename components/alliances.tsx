import Image from "next/image"
import { useTranslation } from "react-i18next";
import shopee from '../public/img/icon/shopee.svg';
import mercadoLibre from '../public/img/icon/mercadolibre.png';
import shopify from '../public/img/icon/shopify.png';
import linio from '../public/img/icon/linio.png';
import masair from '../public/img/icon/masair.png';
import qatar from '../public/img/icon/qatar.png';
import latam from '../public/img/icon/latam.png';
import britishAirways from '../public/img/icon/britishairways.png';
import track from '../public/img/icon/31track.svg';

export const Alliances = () => {
    const { t } = useTranslation();
    return (
        <section id="aliance" className="testimonial-area section-bg1">
          <div className="container">
            <div className="testimonial-wrapper">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-tittle text-center mb-50">
                    <h2>{t('aliance')}</h2>
                  </div>
                </div>
              </div>
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-11">
                  <div className="section_header">
                    <div className="section_text">
                      <div style={{ color: "#175898", fontSize: "25px" }}><strong>{t('our_clients')}</strong></div>
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
                          src={shopee}
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
                          src={mercadoLibre}
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
                          src={shopify}
                          width="222px"
                          height="48px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center"}}>
                      <a
                        style={{ display: "flex" }}
                        href="https://www.linio.com"
                        target="_blank"
                        className="image_link"
                        rel="noreferrer"
                      >
                        <Image
                          src={linio}
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
                      <div style={{ color: "#175898", fontSize: "25px" }}><strong>{t('our_partners')}</strong></div>
                    </div>
                  </div>
                  <div className="logos_row">
                    <div style={{ display: "flex" }}>
                      <a
                        href="https://www.masair.com/"
                        style={{ display: "flex", alignItems: "center" }}
                        target="_blank"
                        className="image_link"
                        rel="noreferrer"
                      >
                        <Image
                          src={masair}
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
                        target="_blank"
                        className="image_link"
                        rel="noreferrer"
                      >
                        <Image
                          src={qatar}
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
                        target="_blank"
                        className="image_link"
                        rel="noreferrer"
                      >
                        <Image
                          src={latam}
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
                        target="_blank"
                        className="image_link"
                        rel="noreferrer"
                      >
                        <Image
                          src={britishAirways}
                          width="222px"
                          height="42px"
                          alt=""
                        />
                      </a>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
                      <a
                        href="https://track.a2a56.com/"
                        style={{ display: "flex", alignItems: "center" }}
                        target="_blank"
                        className="image_link"
                        rel="noreferrer"
                      >
                        <Image
                          src={track}
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
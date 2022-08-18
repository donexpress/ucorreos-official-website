import Image from "next/image"
import { useTranslation } from "react-i18next";

export const Services = () => {
  const { t } = useTranslation();
  return (
    <section id="services" className="sercices-area section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-11">
            <div className="section-tittle text-center mb-60">
              <h2>{t('our_services') as string}</h2>
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
                    <span className="service_card_header">{t('ecommerce_solutions') as string}</span>
                  </h3>
                  <p>{t('ecommerce_description') as string}</p>
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
                    <span className="service_card_header">{t('air_and_sea_conveyance') as string}</span>
                  </h3>
                  <p>{t('air_and_sea_conveyance_description') as string}</p>
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
                    <span className="service_card_header">{t('warehouse_service') as string}</span>
                  </h3>
                  <p>{t('warehouse_service_description') as string}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
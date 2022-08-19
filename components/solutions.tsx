import Image from "next/image"
import { useTranslation } from "react-i18next";

export const Solutions = () => {
  const { t } = useTranslation();
  return (
    <section id="home" className="about-area section-padding gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-5 col-md-10">
            <div className="about-caption">
              <div className="section-tittle section-tittle3">
                <h2>{t('solutions')}</h2>
              </div>
              <div className="support-caption">
                <p className="pera-top" style={{ fontWeight: 700 }}>{t('solutions_description')}</p>
              </div>
            </div>
          </div>
          <div className="offset-xl-1 col-xl-7 col-lg-6 7ol-md-10">
            <div className="about-blog">
              <div className="single-offers d-flex mb-20" style={{ boxShadow: "4px 4px 8px 0 #d9d9d9, 0 6px 20px 0 #d9d9d9" }}>
                <div className="icon" style={{ marginTop: "45px", width: '130px', height: '100px' }} >
                  <Image width="130px" height="100px" src="/img/elements/experience.png" alt="this icon" className="icon-border" />
                </div>
                <div className="offers-cap" style={{ width: '736px' }}>
                  <h3><a href="#">{t('wide_experience')}</a></h3>
                  <p>{t('wide_experience_description')}</p>
                </div>
              </div>
              <div className="single-offers d-flex mb-20" style={{ boxShadow: "4px 4px 8px 0 #d9d9d9, 0 6px 20px 0 #d9d9d9" }}>
                <div className="icon" style={{ width: '130px', height: '100px' }}>
                  <Image layout="fill" src="/img/elements/serviceLevel.png" alt="this icon" className="icon-border" />
                </div>
                <div className="offers-cap">
                  <h3><a href="#">{t('service_levels')}</a></h3>
                  <p>{t('service_levels_description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
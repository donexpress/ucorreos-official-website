import Image from "next/image"
import { useTranslation } from "react-i18next";
import technology2 from '../public/img/post/technology2.png'
import technology from '../public/img/post/technology.png'
export const Technologies = () => {
  const { t } = useTranslation();
  return (
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
                <h2>{t('technologies')}</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-6 col-lg-6">
              <div style={{ height: "454px", marginBottom: "40px" }}>
                <h1>
                  <strong>{t('cutting_edge_technology')}</strong>
                </h1>
                <h4 style={{ marginTop: "20px", color: "rgb(23, 88, 152)" }}><strong>{t('cutting_edge_technology_subtitle')}</strong></h4>
                <div style={{ marginTop: "40px", textAlign: "justify", fontWeight: 600 }}>{t('cutting_edge_technology_description_1')}</div>
                <div style={{ marginTop: "20px", textAlign: "justify", fontWeight: 600 }}>{t('cutting_edge_technology_description_2')}</div>
              </div>
              <div style={{ height: '454px', width: '100%', maxWidth: '454px', position: 'relative' }}>
                <Image
                  layout="fill"
                  src={technology2}
                  alt=""
                />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{ height: '454px', width: '100%', maxWidth: '454px', position: 'relative' }}>
                <Image
                  layout="fill"
                  src={technology}
                  alt=""
                />
              </div>
              <div style={{ height: "454px", marginTop: "40px" }}>
                <h1>
                  <strong>{t('business_intelligence')}</strong>
                </h1>
                <h4 style={{ marginTop: "20px", color: "rgb(23, 88, 152)" }}><strong>{t('business_intelligence_subtitle')}</strong></h4>
                <div style={{ marginTop: "40px", textAlign: "justify", fontWeight: 600 }}>
                {t('business_intelligence_description_1')}
                  </div>
                <div style={{ marginTop: "20px", textAlign: "justify", fontWeight: 600 }}>
                {t('business_intelligence_description_2')}
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
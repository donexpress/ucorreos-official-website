import type { NextPage } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Sliders } from '../components/sliders'
import { Solutions } from '../components/solutions'
import { Services } from '../components/services'
import { Quoter } from '../components/quoter'
import { Alliances } from '../components/alliances'
import { Technologies } from '../components/technologies'
import { useTranslation } from 'react-i18next'
const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <main>
        <Sliders />
        <Solutions />
        <div className="visit-tailor-area fix tailor_gradient">
          <div className="tailor-details-fader">
            <div className="tailor-details">
              <h2 style={{ marginBottom: "40px" }}>{t('full_control_1')}<br />{t('full_control_2')}</h2>
              <div className="sinlge-wrapper">
                <div className="single-details" style={{ width: "369px", height: "211px" }}>
                  <h3>{t('logistics_solutions')}</h3>
                  <p>{t('logistics_solutions_description')}</p>
                </div>
                <div className="single-details" style={{ width: "369px", height: "165px" }}>
                  <h3>{t('security_reliability')}</h3>
                  <p>{t('security_reliability_description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Services />
        <Quoter />
        <Alliances />
        <Technologies />
      </main>
      <Footer />
      <div id="back-top" style={{ backgroundColor: "#00a9e7" }}>
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt" style={{color: '#fff'}}></i></a>
      </div>
    </>
  )
}

export default Home

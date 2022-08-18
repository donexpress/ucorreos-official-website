import type { NextPage } from 'next'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { Sliders } from '../components/sliders'
import { Solutions } from '../components/solutions'
import { Services } from '../components/services'
import { Quoter } from '../components/quoter'
import { Alliances } from '../components/alliances'
import { Technologies } from '../components/technologies'
const Home: NextPage = () => {

  return (
    <>
      <Header />
      <main>
        <Sliders />
        <Solutions />
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
        <Services />
        <Quoter />
        <Alliances />
        <Technologies />
      </main>
      <Footer />
      <div id="back-top" style={{ backgroundColor: "#00a9e7" }}>
        <a title="Go to Top" href="#"> <i className="fas fa-level-up-alt"></i></a>
      </div>
    </>
  )
}

export default Home

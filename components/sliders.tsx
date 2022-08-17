import Slider from "react-slick";
import Image from "next/image";
export const Sliders = () => {
  
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }: {currentSlide: number, slideCount: number}) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" +
      (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <i className="ti-angle-left"></i>
  </button>
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }: {currentSlide: number, slideCount: number}) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <i className="ti-angle-right"></i>
  </button>
);
  
  const settings = {
    autoplay: false,
    autoplaySpeed: 4000,
    dots: false,
    fade: true,
    arrows: true,
    // @ts-ignore
    prevArrow: <SlickArrowLeft />,
    // @ts-ignore
    nextArrow: <SlickArrowRight />,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrow: false
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };
  return (
    <div id="home" className="slider-area">
      <Slider className="slider-active" {...settings}>
        {/* <div className="slider-active" data-slick='{"slidesToShow": 3, "slidesToScroll": 3}'> */}
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
                    <a href="https://www.31track.com/" target="_blank" rel="noreferrer" className="border-btn hero-btn">
                      Haga clic para referencia
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                <div className="hero-caption-right">
                  <Image width="49px" height="49px" className="icon" src="/img/icon/favicon.png" alt="" />
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
                    <a href="https://mailamericas.com/covid-19" target="_blank" rel="noreferrer" className="border-btn hero-btn" >
                      Haga clic para referencia
                      </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-6 col-sm-6">
                <div className="hero-caption-right">
                  <Image width="49px" height="49px" className="icon" src="/img/icon/favicon.png" alt="" />
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
                  <Image width="49px" height="49px" className="icon" src="/img/icon/favicon.png" alt="" />
                  <h2 data-animation="fadeInUp" data-delay=".3s">
                    Transporte de calidad y excelencia para potenciar su
                    negocio
                    </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
      {/* </div> */}
    </div>
  )
}
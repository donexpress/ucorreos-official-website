import Image from "next/image"
import { useTranslation } from "react-i18next";
import logo from '../public/img/logo/logo_image.png'
export const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
        <div className="footer-wrapper">
          <div className="footer-area footer-padding">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-8 col-sm-8">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-logo mb-35">
                        <a href="index.html"
                        ><Image
                            src={logo}
                            width="93px"
                            height="21.39px"
                            alt=""
                          /></a>
                      </div>
                      <div
                        className="footer-social col-xl-6 col-lg-8 col-md-12 col-sm-12"
                      >
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3">
                          `
                        <a href="#"><i className="fa fa-map-marker-alt"></i></a>
                        </div>
                        <div
                          className="footer-pera col-xl-9 col-lg-9 col-md-9 col-sm-9"
                        >
                          <p>
                          {t('address_text')}
                        </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="offset-xl-1 offset-lg-1 col-xl-2 col-lg-2 col-md-4 col-sm-4"
                >
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>{t('links')}</h4>
                      <ul style={{paddingLeft: '0px'}}>
                        <li><a href="#services">{t('services')}</a></li>
                        <li><a href="#aliance">{t('aliance')}</a></li>
                        <li><a href="#technologies">{t('technologies')}</a></li>
                        <li><a href="#quote">{t('quoter')}</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12">
                    <div className="footer-copy-right text-center text-white">
                      Copyright &copy; {new Date().getFullYear()} {t('all_rights_reserved')}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}
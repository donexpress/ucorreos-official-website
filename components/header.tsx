import { useState, ChangeEvent } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag"
import i18n from "./i18n";

export const Header = () => {
    const [code, setCode] = useState<string>("");
    const { t } = useTranslation();
    const search = () => {
        if (code) {
            const url = `https://www.31track.com/results?tn[]=${code}`;
            if (window) {
                // @ts-ignore
                window.open(url, "_blank").focus();
            }
        }
    }
    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        setCode(evt.target.value)
    }
    return (
        <header>
            <div id="home" className="header-area">
                <div className="main-header header-sticky">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="menu-wrapper align-items-center justify-content-between">
                                <div className="header-left d-flex align-items-center">
                                    <div className="logo">
                                        <div className="logo_gradient">
                                            <a href="index.html">
                                                <Image src="/img/logo/logo_image.png" width="100px" height="23.02px" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="logo2">
                                        <div className="logo_gradient">
                                            <a href="index.html">
                                                <Image src="/img/logo/logo_image.png" width="100px" height="23.02px" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li>
                                                    <a href="#home"><span className="home">{t('home')}</span></a>
                                                </li>
                                                <li>
                                                    <a href="#services"
                                                    ><span className="services">{t('services')}</span></a>
                                                </li>
                                                <li>
                                                    <a href="#aliance"
                                                    ><span className="aliance">{t('aliance')}</span></a>
                                                </li>
                                                <li>
                                                    <a href="#technologies"
                                                    ><span className="technologies">{t('technologies')}</span></a>
                                                </li>
                                                <li>
                                                    <a href="#quote"
                                                    ><span className="quote">{t('quoter')}</span></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right1 d-flex align-items-center">
                                    <div className="laguage_container">
                                        <ReactCountryFlag
                                            countryCode="US"
                                            className="country_flag"
                                            svg
                                            style={{
                                                width: '2em',
                                                height: '2em',
                                            }}
                                            title="US"
                                            onClick={()=>i18n.changeLanguage('en')}
                                        />
                                        <ReactCountryFlag
                                            className="country_flag"
                                            countryCode="ES"
                                            svg
                                            style={{
                                                width: '2em',
                                                height: '2em',
                                            }}
                                            title="ES"
                                            onClick={()=>i18n.changeLanguage('es')}
                                        />
                                    </div>
                                    <div className="tracking_container">
                                        <input id="tracking_code" type="text" placeholder="Tracking" value={code} onChange={onChange} />
                                        {/*  onclick="search()" */}
                                        <button onClick={search} style={{ position: 'relative', top: '6px' }}>
                                            <Image width="24px" height="24px" alt="search_icon" src="/img/icon/search.svg" />
                                        </button>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
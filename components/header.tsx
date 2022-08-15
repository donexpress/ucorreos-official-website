import { useState, ChangeEvent } from "react";

export const Header = () => {
    const [code, setCode] = useState<string>("");
    const search = () => {
        if (code) {
          const url = `https://www.31track.com/results?tn[]=${code}`;
          if(window) {
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
                                                <img src="/img/logo/logo_image.png" width="100px" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="logo2">
                                        <div className="logo_gradient">
                                            <a href="index.html">
                                                <img src="/img/logo/logo_image.png" width="100px" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="main-menu d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li>
                                                    <a href="#home"><span className="home">Inicio</span></a>
                                                </li>
                                                <li>
                                                    <a href="#services"
                                                    ><span className="services">Servicio</span></a>
                                                </li>
                                                <li>
                                                    <a href="#aliance"
                                                    ><span className="aliance">Alianzas</span></a>
                                                </li>
                                                <li>
                                                    <a href="#technologies"
                                                    ><span className="technologies">Tecnologías</span></a>
                                                </li>
                                                <li>
                                                    <a href="#quote"
                                                    ><span className="quote">Cotizador</span></a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="header-right1 d-flex align-items-center">
                                    <div className="tracking_container">
                                        <input id="tracking_code" type="text" placeholder="Tracking" value={code} onChange={onChange}/>
                                        {/*  onclick="search()" */}
                                        <button onClick={search}>
                                            <img src="/img/icon/search.svg" />
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
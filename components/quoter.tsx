import { useState, ChangeEvent } from "react";
import { useTranslation } from "react-i18next";

export const Quoter = () => {
  const { t } = useTranslation();
  const [shipmentType, setShipmentType] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [originCountry, setOriginCountry] = useState<string>("");
  const [destinationCountry, setDestinationCountry] = useState<string>("");

  const checkboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setShipmentType(evt.target.value)
  }

  const quote = () => {
    let msg = "Gracias, le contactaremos";
    if (shipmentType === "") {
      msg = "Por favor, seleccione un método de envío (marítimo, aéreo o terrestre).";
    }
    if (name === "" || email === "" || phoneNumber === "" || originCountry === "" || destinationCountry === "") {
      msg = "Por favor, llene todos los campos requeridos.";
    }
    alert(msg);
  }
  return (
    <section id="quote" className="contact-form-area gray-bg fix" style={{ paddingBottom: "60px", paddingTop: "60px" }}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-xl-4 col-lg-5">
            <div className="contact-caption">
              <div className="section-tittle section-tittle3">
                <h2>{t('quoter')}</h2>
                <p style={{ color: "#1d2547", fontWeight: 700 }}>
                  {t('quoter_description')}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-xxl-7 col-lg-7">
            <div className="contact-form-wrapper" style={{ borderColor: "#175898" }}>

              {/* onsubmit="return onSubmit()" */}
              <form
                className="contact-form"
              >
                <div className="row">
                  <div className="select-Categories">
                    <label className="containers">
                      {t('maritime')}
                      <input
                        id="shipmentType"
                        value="sea"
                        type="checkbox"
                        className="chb"
                        onChange={checkboxChange}
                        checked={shipmentType === 'sea'}
                      />
                      <span className="checkmark form_background_color"></span>
                    </label>
                    <label className="containers">
                      {t('aerial')}
                      <input
                        id="shipmentType"
                        type="checkbox"
                        className="chb"
                        value="aerial"
                        onChange={checkboxChange}
                        checked={shipmentType === 'aerial'}
                      />
                      <span className="checkmark form_background_color"></span>
                    </label>
                    <label className="containers">
                      {t('land')}
                      <input
                        id="shipmentType"
                        type="checkbox"
                        className="chb"
                        value="land"
                        onChange={checkboxChange}
                        checked={shipmentType === 'land'}
                      />
                      <span className="checkmark form_background_color"></span>
                    </label>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-form">
                      <label>{t('fullname')} *</label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(evt) => setName(evt.target.value)}
                        required
                        placeholder="Pepe Pérez Pérez"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-form">
                      <label>{t('weight_volume')}</label>
                      <input
                        value={weight}
                        onChange={(evt) => setWeight(evt.target.value)}
                        id="weight-or-volume"
                        placeholder="0"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-form">
                      <label>{t('email')} *</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(evt) => setEmail(evt.target.value)}
                        id="email"
                        required
                        placeholder="correo@electrónico.com"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-form">
                      <label>{t('phone_number')} *</label>
                      <input
                        type="text"
                        value={phoneNumber}
                        onChange={(evt) => setPhoneNumber(evt.target.value)}
                        id="phone_number"
                        required
                        placeholder="+1 (123) 445-6789"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-form">
                      <label>{t('country_of_origin')} *</label>
                      <input
                        type="text"
                        value={originCountry}
                        onChange={(evt) => setOriginCountry(evt.target.value)}
                        id="origin_country"
                        required
                        placeholder="EEUU"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="input-form">
                      <label>{t('destination_country')} *</label>
                      <input
                        type="text"
                        id="destination_country"
                        value={destinationCountry}
                        onChange={(evt) => setDestinationCountry(evt.target.value)}
                        required
                        placeholder="México"
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button name="submit" onClick={quote} className="submit-btn2" style={{ backgroundColor: "#00a9e7" }}>
                      {t('quote')}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
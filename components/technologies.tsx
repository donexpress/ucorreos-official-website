export const Technologies = () => {
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
                    <h2>Tecnologías</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between">
                <div className="col-xl-6 col-lg-6">
                  <div style={{ height: "454px", marginBottom: "40px" }}>
                    <h1>
                      <strong>Tecnología de punta</strong>
                    </h1>
                    <h4 style={{ marginTop: "20px", color: "rgb(23, 88, 152)" }}><strong>Siempre conectados</strong></h4>
                    <div style={{ marginTop: "40px", textAlign: "justify", fontWeight: 600 }}>
                      Contamos con la última tecnología en sistemas de seguimiento
                      de paquetería y procesamiento de información para crear la
                      mejor experiencia para nuestros clientes.
                  </div>
                    <div style={{ marginTop: "20px", textAlign: "justify", fontWeight: 600 }}>
                      Pregunte a cualquier persona que envíe o reciba un paquete
                      qué es importante y escuchará la confiabilidad. Por eso,
                      creamos una tecnología de seguimiento que le permite ver,
                      resolver y cumplir con las expectativas, localmente,
                      globalmente, por paquete y envío.
                  </div>
                  </div>
                  <img
                    src="/img/post/technology2.png"
                    style={{ height: "454px", maxWidth: "100%" }}
                    alt=""
                  />
                </div>
                <div className="col-xl-6 col-lg-6" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <img
                    src="/img/post/technology.png"
                    style={{ height: "454px", maxWidth: "100%" }}
                    alt=""
                  />
                  <div style={{ height: "454px", marginTop: "40px" }}>
                    <h1>
                      <strong>Business Intelligence</strong>
                    </h1>
                    <h4 style={{ marginTop: "20px", color: "rgb(23, 88, 152)" }}><strong>Siempre un paso adelante</strong></h4>
                    <div style={{ marginTop: "40px", textAlign: "justify", fontWeight: 600 }}>
                      La solución de seguimiento adecuada
                  </div>
                    <div style={{ marginTop: "20px", textAlign: "justify", fontWeight: 600 }}>
                      Ya sea personalizar 10 atuendos para un artista local o
                      equipar el gimnasio con una gran máquina de entrenamiento,
                      todo depende de su capacidad para entregar y rastrear su
                      paquete. Pero la información de estado requerida para
                      procesar las dos confirmaciones es bastante diferente. Es
                      por eso que hemos desarrollado una variedad de herramientas
                      de seguimiento que le brindan exactamente la información que
                      necesita, cuándo y dónde la necesita. Así que puedes
                      saltarte esos disfraces e ir al teatro antes del nuevo
                      ensayo. O estimar la entrega de equipos de fitness.
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}
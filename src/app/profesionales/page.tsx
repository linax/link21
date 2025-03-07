import "../../styles/globals.css"
const professionals = () => {
  return (
    <section id="profesionales">
      <div className="container">
        <div className="section-title">
          <h2>Para Profesionales</h2>
          <p>Si eres un profesional de la salud interesado en formar parte de nuestra comunidad, nos encantaría conocerte.</p>
        </div>
        <div className="contact-form">
          <form id="professionalForm">
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <input type="text" id="name" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="speciality">Especialidad</label>
              <input type="text" id="speciality" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <input type="tel" id="phone" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">¿Cómo te gustaría colaborar?</label>
              <textarea id="message" className="form-control" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn">
                Enviar solicitud
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
export default professionals

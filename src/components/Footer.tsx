const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="#" className="logo text-amber-700">
          Link<span>21</span>
        </a>
        <div className="footer-links">
          <a href="#proposito">Propósito</a>
          <a href="#conectar">Conectar</a>
          <a href="/profesionales">Profesionales</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className="social-links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p className="copyright">© 2025 Link21. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer

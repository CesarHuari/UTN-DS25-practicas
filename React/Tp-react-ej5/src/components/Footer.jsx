import '../assets/css/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>📚 Sobre Librería César</h3>
          <p>
            Somos tu librería en línea de confianza. Ofrecemos los mejores
            títulos en diversos géneros para todos nuestros clientes.
          </p>
        </div>

        <div className="footer-section">
          <h3>Síguenos</h3>
          <div className="social-links">
            <a href="#" title="Facebook">f</a>
            <a href="#" title="Twitter">𝕏</a>
            <a href="#" title="Instagram">📷</a>
            <a href="#" title="YouTube">▶</a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Información</h3>
          <ul>
            <li><a href="#about">Acerca de nosotros</a></li>
            <li><a href="#faq">Preguntas frecuentes</a></li>
            <li><a href="#shipping">Envíos</a></li>
            <li><a href="#returns">Devoluciones</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          &copy; {currentYear} Librería César. Todos los derechos reservados.
        </div>
        <div className="footer-links">
          <a href="#terms">Términos y Condiciones</a>
          <a href="#privacy">Política de Privacidad</a>
          <a href="#cookies">Política de Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

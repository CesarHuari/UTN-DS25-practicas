import { useState } from 'react';
import '../assets/css/contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje de contacto:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        asunto: '',
        mensaje: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <h1 className="page-title">Contáctanos</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>📍 Información de Contacto</h2>

          <div className="contact-info-item">
            <div className="contact-info-icon">📍</div>
            <div className="contact-info-content">
              <h3>Dirección</h3>
              <p>
                Librería César<br />
                Calle Principal 123<br />
                Buenos Aires, Argentina 1425
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">📞</div>
            <div className="contact-info-content">
              <h3>Teléfono</h3>
              <p>
                <strong>Principal:</strong> +54 11 4567-8901<br />
                <strong>Atención al Cliente:</strong> +54 11 4567-8902<br />
                <strong>Horario:</strong> Lun-Vie 9:00-18:00
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">✉️</div>
            <div className="contact-info-content">
              <h3>Email</h3>
              <p>
                <strong>General:</strong> info@libreriaceacar.com<br />
                <strong>Soporte:</strong> soporte@libreriacecar.com<br />
                <strong>Ventas:</strong> ventas@libreriacecar.com
              </p>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">🌐</div>
            <div className="contact-info-content">
              <h3>Síguenos</h3>
              <p>
                <strong>Facebook:</strong> @LibreriaCesar<br />
                <strong>Instagram:</strong> @LibreriaCesar<br />
                <strong>Twitter:</strong> @LibreriaCesar
              </p>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <h2>Envíanos tu Mensaje</h2>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="asunto">Asunto *</label>
              <input
                type="text"
                id="asunto"
                name="asunto"
                value={formData.asunto}
                onChange={handleChange}
                required
                placeholder="Asunto de tu consulta"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                placeholder="Cuéntanos cómo podemos ayudarte..."
              />
            </div>

            <button type="submit" className="contact-form-submit">
              Enviar Mensaje
            </button>
          </form>

          {submitted && (
            <div className="contact-form-message success">
              ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

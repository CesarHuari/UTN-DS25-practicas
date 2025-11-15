import { useState } from 'react';
import '../assets/css/forms.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    fechaNacimiento: '',
    email: '',
    password: '',
    sexo: '',
    temaFavorito: ''
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
    console.log('Formulario enviado:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        nombre: '',
        apellido: '',
        fechaNacimiento: '',
        email: '',
        password: '',
        sexo: '',
        temaFavorito: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="form-page">
      <div className="form-container">
        <h1 className="form-title">Crear Cuenta</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Ingresa tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="apellido">Apellido *</label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                value={formData.apellido}
                onChange={handleChange}
                required
                placeholder="Ingresa tu apellido"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="fechaNacimiento">Fecha de Nacimiento *</label>
            <input
              type="date"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
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

          <div className="form-group">
            <label htmlFor="password">Contraseña *</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Crea una contraseña segura"
            />
          </div>

          <div className="form-group">
            <label>Sexo *</label>
            <div className="radio-group">
              <div className="radio-option">
                <input
                  type="radio"
                  id="masculino"
                  name="sexo"
                  value="masculino"
                  checked={formData.sexo === 'masculino'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="masculino">Masculino</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="femenino"
                  name="sexo"
                  value="femenino"
                  checked={formData.sexo === 'femenino'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="femenino">Femenino</label>
              </div>
              <div className="radio-option">
                <input
                  type="radio"
                  id="otro"
                  name="sexo"
                  value="otro"
                  checked={formData.sexo === 'otro'}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="otro">Otro</label>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="temaFavorito">Tema Favorito *</label>
            <select
              id="temaFavorito"
              name="temaFavorito"
              value={formData.temaFavorito}
              onChange={handleChange}
              required
            >
              <option value="">-- Selecciona un tema --</option>
              <option value="ficcion">Ficción</option>
              <option value="no-ficcion">No Ficción</option>
              <option value="infantil">Infantil y Fantasía</option>
              <option value="tecnico">Técnico</option>
            </select>
          </div>

          <button type="submit" className="form-submit">
            Registrarse
          </button>
        </form>

        {submitted && (
          <div className="form-message success">
            ¡Registro exitoso! Bienvenido a Librería César.
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;

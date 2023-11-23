import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formValues, setFormValues] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formValues);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log('Formulario enviado:', formValues);
      setSuccessMessage('Mensaje enviado con éxito');
      setFormValues({ nombre: '', email: '', mensaje: '' });
    }
  };

  const validateForm = (values) => {
    let errors = {};

    if (!values.nombre.trim()) {
      errors.nombre = 'El nombre es requerido';
    }

    if (!values.email.trim()) {
      errors.email = 'El email es requerido';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Ingresa un email válido';
    }

    if (!values.mensaje.trim()) {
      errors.mensaje = 'El mensaje es requerido';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="contact-section" id="contact">
      <h2>Contacto</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formValues.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <span className="error">{errors.nombre}</span>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formValues.mensaje}
            onChange={handleChange}
          />
          {errors.mensaje && <span className="error">{errors.mensaje}</span>}
        </div>

        <button type="submit">Enviar</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </section>
  );
}

export default Contact;


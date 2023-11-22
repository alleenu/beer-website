import React, { useState, useEffect } from 'react';
import './Testimonials.css'; // Asegúrate de tener un archivo CSS para los estilos

const Testimonial = ({ id, author, text, onDelete }) => {
  return (
    <div className="testimonial-box">
      <p className="testimonial-text">{text}</p>
      <p className="testimonial-author">- {author}</p>
      <button onClick={() => onDelete(id)}>Eliminar</button>
    </div>
  );
};

const Testimonials = () => {
  const [testimonialsData, setTestimonialsData] = useState([
    {
      id: 1,
      author: 'MARIA RODRIGUEZ',
      text: 'Excelente atención y gran variedad de productos',
    },
    {
      id: 2,
      author: 'PEDRO PEREZ',
      text: 'Rápida entrega y muchos medios de pago',
    },
    // Add more testimonials as needed
  ]);

  const [newTestimonialText, setNewTestimonialText] = useState('');
  const [newTestimonialAuthor, setNewTestimonialAuthor] = useState('');

  const addTestimonial = () => {
    const newTestimonial = {
      id: testimonialsData.length + 1,
      author: newTestimonialAuthor,
      text: newTestimonialText,
    };
    setTestimonialsData([...testimonialsData, newTestimonial]);
    setNewTestimonialText('');
    setNewTestimonialAuthor('');
  };

  const deleteTestimonial = (id) => {
    const updatedTestimonials = testimonialsData.filter((testimonial) => testimonial.id !== id);
    setTestimonialsData(updatedTestimonials);
  };

  useEffect(() => {
    // Puedes agregar lógica adicional aquí si es necesario
  }, [testimonialsData]);

  return (
    <div className="testimonials-container">
      <div className="testimonials-list">
        {testimonialsData.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} onDelete={deleteTestimonial} />
        ))}
      </div>
      <form>
        <label>
          Nuevo Testimonio:
          <textarea
            value={newTestimonialText}
            onChange={(e) => setNewTestimonialText(e.target.value)}
            placeholder="Escribe tu testimonio aquí"
          />
        </label>
        <label>
          Autor:
          <input
            type="text"
            value={newTestimonialAuthor}
            onChange={(e) => setNewTestimonialAuthor(e.target.value)}
            placeholder="Nombre del autor"
          />
        </label>
        <button type="button" onClick={addTestimonial}>
          Agregar Testimonio
        </button>
      </form>
    </div>
  );
};

export default Testimonials;

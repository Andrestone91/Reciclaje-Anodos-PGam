import React, { useState } from "react";
import css from "./index.css";

function ContactoForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes enviar los datos a tu backend o servicio de email
    setEnviado(true);
    setTimeout(() => setEnviado(false), 2000);
    setForm({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <form className={css.contactoForm} onSubmit={handleSubmit}>
      <h2 className={css.contactoTitulo}>Obtenga una cotización hoy</h2>
  <div className={css.inputRow}>
  <input
    className={css.contactoInput}
    type="text"
    name="nombre"
    placeholder="Tu nombre"
    value={form.nombre}
    onChange={handleChange}
    required
  />
  <input
    className={css.contactoInput}
    type="email"
    name="email"
    placeholder="Tu correo electrónico"
    value={form.email}
    onChange={handleChange}
    required
  />
</div>
      <textarea
        className={css.contactoTextarea}
        name="mensaje"
        placeholder="Escribe tu mensaje"
        value={form.mensaje}
        onChange={handleChange}
        required
      />
      <button className={css.contactoBtn} type="submit">Enviar</button>
      {enviado && <div className={css.contactoEnviado}>¡Mensaje enviado!</div>}
    </form>
  );
}

export default ContactoForm;
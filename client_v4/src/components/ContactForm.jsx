import React, { useState } from 'react'
export default function ContactForm(){
  const [form, setForm] = useState({ nombre:'', email:'', mensaje:'' })
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)

  const validar = () => {
    const err = {}
    if(!form.nombre || form.nombre.trim().length < 3) err.nombre = 'El nombre debe tener al menos 3 caracteres.'
    if(!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Email inválido.'
    if(!form.mensaje || form.mensaje.trim().length < 10) err.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    return err
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validar()
    setErrors(err)
    if(Object.keys(err).length === 0){
      console.log('Contacto enviado:', form)
      setSuccess(true)
      setForm({ nombre:'', email:'', mensaje:'' })
      setTimeout(() => setSuccess(false), 4000)
    } else {
      setTimeout(() => setErrors({}), 4000)
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h3>Contacto</h3>
      <div className="field"><input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />{errors.nombre && <p className="error">{errors.nombre}</p>}</div>
      <div className="field"><input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />{errors.email && <p className="error">{errors.email}</p>}</div>
      <div className="field"><textarea name="mensaje" placeholder="Mensaje" value={form.mensaje} onChange={handleChange} required /></div>
      {errors.mensaje && <p className="error">{errors.mensaje}</p>}
      <button type="submit">Enviar</button>
      {success && <p className="success">¡Mensaje enviado con éxito!</p>}
    </form>
  )
}

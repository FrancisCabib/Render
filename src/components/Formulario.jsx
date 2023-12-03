import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

const Formulario = ({ agregarColaborador }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [edad, setEdad] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre && correo && edad && cargo && telefono) {
      const nuevoColaborador = {
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };

      agregarColaborador(nuevoColaborador);

      setNombre('');
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
      setMensajeExito('Colaborador agregado con éxito');
      setMensajeError('');
    } else {
      setMensajeError('Complete todos los campos');
      setMensajeExito('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Form.Group>
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Correo</Form.Label>
        <Form.Control
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Edad</Form.Label>
        <Form.Control
          type="number"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Cargo</Form.Label>
        <Form.Control
          type="text"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Teléfono</Form.Label>
        <Form.Control
          type="tel"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit" style={{ marginTop: '20px' }}>
  Agregar
</Button>
      <div style={{ marginTop: '20px' }}>
        {(mensajeExito || mensajeError) && (
          <Alert
            variant={mensajeExito ? 'success' : 'danger'}
          >
            {mensajeExito || mensajeError}
          </Alert>
        )}
      </div>
    </Form>
  );
};

export default Formulario;

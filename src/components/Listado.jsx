import React from 'react';
import { Table, Button } from 'react-bootstrap';

const Listado = ({ colaboradores, eliminarColaborador }) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Correo</th>
          <th>Edad</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {colaboradores.map(col => (
          <tr key={col.id}>
            <td>{col.nombre}</td>
            <td>{col.correo}</td>
            <td>{col.edad}</td>
            <td>{col.cargo}</td>
            <td>{col.telefono}</td>
            <td>
              <Button variant="danger" onClick={() => eliminarColaborador(col.id)}>Eliminar</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Listado;

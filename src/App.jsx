import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [colaboradores, setColaboradores] = useState([
    { id: 1, nombre: 'Juan Soto', correo: 'juans@colaborador.com', edad: '23', cargo: 'Desarrollador FrontEnd', telefono: '99887766' },
    { id: 2, nombre: 'Lucas Pailamilla', correo: 'lucasp@colaborador.com', edad: '31', cargo: 'Desarrollador Backend', telefono: '88779955' },
    { id: 3, nombre: 'Diego Riquelme', correo: 'diegor@colaborador.com', edad: '28', cargo: 'Ingeniero DevOps', telefono: '99226644' }
  ]);

  const [resultadoBusqueda, setResultadoBusqueda] = useState([]);

  const agregarColaborador = (colaborador) => {
    setColaboradores([...colaboradores, { ...colaborador, id: Date.now() }]);
  };

  const eliminarColaborador = (id) => {
    setColaboradores(colaboradores.filter(col => col.id !== id));
  };

  return (
    <Container fluid="md" className="my-4">
      <Row className="justify-content-md-center my-4">
        <h1>Lista de colaboradores</h1>
      </Row>
      <Row>
        <Col xs={12} md={8}>
          <Buscador colaboradores={colaboradores} setResultadoBusqueda={setResultadoBusqueda} />
          {resultadoBusqueda.length > 0 ? (
            <Listado colaboradores={resultadoBusqueda} eliminarColaborador={eliminarColaborador} />
          ) : (
            <Listado colaboradores={colaboradores} eliminarColaborador={eliminarColaborador} />
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <h2>Agregar Colaborador</h2>
          <Formulario agregarColaborador={agregarColaborador} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

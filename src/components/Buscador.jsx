import React, { useState } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';

const Buscador = ({ colaboradores, setResultadoBusqueda }) => {
  const [busqueda, setBusqueda] = useState('');

  const manejarBusqueda = (e) => {
    const valorBusqueda = e.target.value;
    setBusqueda(valorBusqueda);

    const resultado = colaboradores.filter((col) =>
      Object.values(col).some((value) =>
        value.toString().toLowerCase().includes(valorBusqueda.toLowerCase())
      )
    );
    setResultadoBusqueda(resultado);
  
    if (valorBusqueda === '') {
      setResultadoBusqueda([]);
    }
  };

  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Busca un colaborador"
          value={busqueda}
          onChange={manejarBusqueda}
        />
      </InputGroup>
    </div>
  );
};

export default Buscador;

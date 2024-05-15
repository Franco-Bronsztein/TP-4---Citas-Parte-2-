import './App.css';
import Titulo from './components/Titulo/Titulo';
import Subtitulo from './components/Subtitulo/Subtitulo';
import Card from './components/Card/Card';
import FormCItas from './components/FormCitas/FormCitas';
import { useState } from 'react';

function App() {
  const [citas, setCitas] = useState([]);


  return (
    <>
      <Titulo></Titulo>
      <div class="container">
        <div class="row">
          <div class="one-half column">
            <Subtitulo nombre='CREAR MI CITA'></Subtitulo>
            <FormCItas setCitas={setCitas} citas={citas}></FormCItas>
          </div>
          <div class="one-half column">
            <Subtitulo nombre='ADMINISTRA TUS CITAS'></Subtitulo>
            <Card
              mascota="Nina"
              dueño="Martin"
              fecha="2021-08-05"
              hora="08:20"
              sintomas="Le duele la pierna"
            />
            {citas.map(c => <Card citas={citas} setCitas={setCitas} mascota={c.mascota} dueño={c.dueño} fecha={c.fecha} hora={c.hora} sintomas={c.sintomas} />) }
  
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

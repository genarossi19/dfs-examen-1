import { useState } from "react";
import "./App.css";
import Controles from "./components/Controles";
import Display from "./components/Display";

function App() {
  const [partido, setPartido] = useState({
    golesLocal: 0,
    golesVisitante: 0,
    amarillaLocal: 0,
    amarillaVisitante: 0,
    rojaLocal: 0,
    rojaVisitante: 0,
  });

  const onGol = (equipo) => {
    equipo === "local"
      ? setPartido({ ...partido, golesLocal: partido.golesLocal + 1 })
      : setPartido({ ...partido, golesVisitante: partido.golesVisitante + 1 });
  };

  const onAmarilla = (equipo) => {
    equipo === "local"
      ? setPartido({ ...partido, amarillaLocal: partido.amarillaLocal + 1 })
      : setPartido({
          ...partido,
          amarillaVisitante: partido.amarillaVisitante + 1,
        });
  };

  const onRoja = (equipo) => {
    equipo === "local"
      ? setPartido({ ...partido, rojaLocal: partido.rojaLocal + 1 })
      : setPartido({
          ...partido,
          rojaVisitante: partido.rojaVisitante + 1,
        });
  };

  const onReiniciar = () => {
    setPartido({
      golesLocal: 0,
      golesVisitante: 0,
      amarillaLocal: 0,
      amarillaVisitante: 0,
      rojaLocal: 0,
      rojaVisitante: 0,
    });
  };

  return (
    <div className="container">
      <h1>Partido</h1>
      <Controles
        onGol={onGol}
        onAmarilla={onAmarilla}
        onRoja={onRoja}
        onReiniciar={onReiniciar}
      />
      <Display partido={partido} />
    </div>
  );
}

export default App;

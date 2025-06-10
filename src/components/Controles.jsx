const Controles = ({ onGol, onAmarilla, onRoja, onReiniciar }) => {
  return (
    <div className="controles">
      <div>
        {/* LOGICA DEL LOCAL */}
        <h3>Local</h3>
        <button
          onClick={() => {
            onGol("local");
          }}
        >
          ⚽ Gol
        </button>
        <button
          onClick={() => {
            onAmarilla("local");
          }}
        >
          🟨 Amarilla
        </button>
        <button onClick={() => onRoja("local")}>🟥 Roja</button>
      </div>
      <div>
        {/* LOGICA DEL VISITANTE  */}
        <h3>Visitante</h3>
        <button
          onClick={() => {
            onGol("visitante");
          }}
        >
          ⚽ Gol
        </button>
        <button
          onClick={() => {
            onAmarilla("visitante");
          }}
        >
          🟨 Amarilla
        </button>
        <button onClick={() => onRoja("visitante")}>🟥 Roja</button>
      </div>
      <button onClick={onReiniciar}>Reiniciar Partido</button>
    </div>
  );
};

export default Controles;

import { useState } from "react";
import "../eslilos/formulario.css";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [mensaje, setMensaje] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    setMensaje(
      `Gracias, ${nombre.toUpperCase()}, por registrar tus comentarios. ¡Te contactaremos pronto!`
    );
  }

  return (
    <div>
      <form className="formulario-contacto" onSubmit={manejarEnvio}>
        <h2>Formulario de Contacto</h2>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label>Correo:</label>
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div>
          <label>Comentarios:</label>
          <textarea
            value={comentarios}
            onChange={(e) => setComentarios(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
}

export default Formulario;

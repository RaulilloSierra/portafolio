import { FaEnvelope, FaGithub } from "react-icons/fa";
import "./Inicio.css";
import { Link } from "react-router-dom";

export default function Inicio() {
  const handleEmail = () => {
    window.location.href = "mailto:raulitosierradiaz@gmail.com";
  };
  return (
    <div className="inicio">
      <div className="foto-inicio">
        <img className="imagen-inicio" src="./foto.jpg" alt="foto perfil" />
      </div>
      <div className="contenido-inicio">
        <h1>Raul Sierra</h1>
        <h2>Desarrollador web</h2>

        <Link
          to="https://drive.google.com/file/d/109EGH78F0vbZEzraxH4o63Y5JCXuapvD/view?usp=sharing"
          target="_blank"
          className="inicio-cv"
        >
          Descargar CV
        </Link>
        <div className="botones-inicio">
          <button onClick={handleEmail} className="inicio-email">
            <FaEnvelope />
          </button>
          <Link
            to="https://github.com/RaulilloSierra"
            target="_blank"
            className="inicio-github"
          >
            <FaGithub />
          </Link>
        </div>
      </div>
    </div>
  );
}

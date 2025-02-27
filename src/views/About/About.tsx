import { FaEnvelope } from "react-icons/fa";
import "./About.css"

export default function About() {
  const handleEmail = () => {
    window.location.href = "mailto:raulitosierradiaz@gmail.com";
  };
  return (
    <div className="about">
      <h2>Sobre mí</h2>
      <p className="about-contenido">
        Estudiante apasionado de Ingeniería de Software con un fuerte interés en
        el desarrollo web. Habilidades fundamentales en TypeScript, JavaScript,
        HTML y CSS, combinadas conconocimientos en tecnologías modernas como
        React, Zustand, Redux, Node.js y Express.js. Comprometido con el
        aprendizaje continuo y la mejora constante. Aspirando a contribuir en
        proyectos desafiantes como desarrollador web para aplicar y ampliar mis
        habilidades técnicas.
      </p>
      <div ><p className="about-contacto">Contacto: <span><button onClick={handleEmail} className="about-email">
        <FaEnvelope />
      </button></span></p></div>
      
    </div>
  );
}

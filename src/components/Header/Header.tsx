import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`opciones ${isOpen && "open"}`}>
        <NavLink
          className={({ isActive }) => (isActive ? "active opcion" : "opcion")}
          to="/"
          onClick={() => setIsOpen(!isOpen)}
        >
          Inicio
        </NavLink>
        <NavLink
          className="opcion"
          to="/sobre-mi"
          onClick={() => setIsOpen(!isOpen)}
        >
          Sobre Mí
        </NavLink>
        <NavLink
          className="opcion"
          to="/proyectos"
          onClick={() => setIsOpen(!isOpen)}
        >
          Proyectos
        </NavLink>
        <NavLink
          className="opcion"
          to="/formacion"
          onClick={() => setIsOpen(!isOpen)}
        >
          Formación
        </NavLink>
        <NavLink
          className="opcion"
          to="/skills"
          onClick={() => setIsOpen(!isOpen)}
        >
          Habilidades
        </NavLink>
        <NavLink
          className="opcion"
          to="/contacto"
          onClick={() => setIsOpen(!isOpen)}
        >
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div></div>
      <nav className="opciones">
        <NavLink className={({ isActive }) => isActive ? "active opcion" : "opcion"} to="/">
          Inicio
        </NavLink>
        <NavLink className="opcion" to="/sobre-mi">
          Sobre Mí
        </NavLink>
        <NavLink className="opcion" to="/proyectos">
          Proyectos
        </NavLink>
        <NavLink className="opcion" to="/formacion">
          Formación
        </NavLink>
        <NavLink className="opcion" to="/skills">
          Habilidades
        </NavLink>
        <NavLink className="opcion" to="/contacto">
          Contacto
        </NavLink>
      </nav>
    </header>
  );
}

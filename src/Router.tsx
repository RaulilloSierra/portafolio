import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./views/Inicio/Inicio";
import About from "./views/About/About";
import Proyectos from "./views/Proyectos/Proyectos";
import Formacion from "./views/Formacion/Formacion";
import Skills from "./views/Skills/Skills";
import Contacto from "./views/Contacto/Contacto";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/formacion" element={<Formacion />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

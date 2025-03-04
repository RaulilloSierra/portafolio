import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Inicio from "./views/Inicio/Inicio";
import About from "./views/About/About";
import Proyectos from "./views/Proyectos/Proyectos";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Proyectos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

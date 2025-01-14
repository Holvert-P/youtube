import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  HashRouter,
  Link,
} from "react-router-dom";
import Acerca from "../pages/Acerca";
import Contacto from "../pages/Contacto";
import Dashboard from "../pages/Dashboard";
import Error404 from "../pages/Error404";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Productos from "../pages/Productos";
import Topics from "../pages/Topics";
import Usuario from "../pages/Usuario";
import Navbar from "./Navbar";
const Basics = () => {
  return (
    <>
      <nav>
        <h2>HasRouter</h2>

        <HashRouter>
          <li>
            <p>navegacion con hasRouter</p>
            <Link to="/">Inicio</Link>
            <Link to="/acerca">Acerca</Link>
            <Link to="/contacto">Contacto</Link>
          </li>
        </HashRouter>
      </nav>
      {/* <Routes></Routes> */}
      <Router>
        <h2>BrowserRouter</h2>
        <Navbar />
        <Routes>
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/" element={<Inicio />} />
          <Route path="/usuario/:username" element={<Usuario />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/about" element={<Navigate to="/acerca" />} />
          <Route path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="react/*" element={<Topics />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Router>
    </>
  );
};

export default Basics;

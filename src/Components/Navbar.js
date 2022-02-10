import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <li>
          <p>Componentes con HTML</p>
          <a href="/">Inicio</a>
          <a href="/acerca">Acerca</a>
          <a href="/contacto">Contacto</a>
          <a href="/sfgfh">Error</a>
        </li>
        <li>
          <p>Componentes con Link</p>
          <Link to="/">Inicio</Link>
          <Link to="/acerca">Acerca</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/sdfsdv">Error</Link>
        </li>
        <li>
          <p>Componentes con Navlink</p>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Acerca
          </NavLink>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contacto
          </NavLink>
          <NavLink
            to="/sdfsdv"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Error
          </NavLink>
        </li>
        <li>
          <p>Componente con parametros</p>
          <NavLink
            to="/usuario/Holvert"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Usuario
          </NavLink>
        </li>
        <li>
          <p>Componente con parametros de consulta</p>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Productos
          </NavLink>
        </li>
        <li>
          <p>Redirecciones</p>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <p>Rutas anidadas</p>
          <Link to="/react">React</Link>
        </li>
        <li>
          <p>Rutas Privadas</p>
          <Link to="/login">Login</Link>
          {localStorage.getItem("isAuth") === "true" && (
            <Link to="/dashboard">Dashboard</Link>
          )}
          {/* <Link to="/dashboard">Dashboard</Link> */}
        </li>
      </nav>
    </>
  );
};

export default Navbar;

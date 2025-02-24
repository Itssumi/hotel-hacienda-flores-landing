import React from "react";
import useMenuStore from "../../stores/useStore.js"; // Importamos el store de Zustand

const HeaderHome = () => {
  const { menuOpen, toggleMenu } = useMenuStore();

  console.log("menuOpen:", menuOpen); // Verifica el valor del estado en la consola

  return (
    <header>
      <button onClick={toggleMenu}>
        {menuOpen ? "Cerrar Menú" : "Abrir Menú"}
      </button>
      {menuOpen && (
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Servicios</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderHome;

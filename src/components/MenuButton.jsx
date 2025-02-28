// MenuButton.jsx
import CSS from "../styles/modules/header.module.css";
import { useStore } from "@nanostores/react";
import { isMenuOpen } from "../stores/store.js";

export default function MenuButton() {
  const $isMenuOpen = useStore(isMenuOpen);

  const toggleMenu = () => {
    isMenuOpen.set(!$isMenuOpen);
  };

  return (
    <div>
      <button name="buttonMenu" onClick={toggleMenu} className={CSS.buttonMenu}>
        {$isMenuOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275t-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275t.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7t-.7.275t-.7-.275z"
            ></path>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M4 18q-.425 0-.712-.288T3 17t.288-.712T4 16h16q.425 0 .713.288T21 17t-.288.713T20 18zm0-5q-.425 0-.712-.288T3 12t.288-.712T4 11h16q.425 0 .713.288T21 12t-.288.713T20 13zm0-5q-.425 0-.712-.288T3 7t.288-.712T4 6h16q.425 0 .713.288T21 7t-.288.713T20 8z"
            ></path>
          </svg>
        )}
      </button>
    </div>
  );
}

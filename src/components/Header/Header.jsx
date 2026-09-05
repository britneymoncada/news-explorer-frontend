import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({ onOpenLogin, isModalOpen }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleOpenLogin() {
    setIsMenuOpen(false);
    onOpenLogin();
  }

  return (
    <header className="header">
      <a className="header__logo" href="/">
        NewsExplorer
      </a>

      <Navigation onOpenLogin={handleOpenLogin} isMenuOpen={isMenuOpen} />

      {!isModalOpen && (
        <button
          className="header__menu-button"
          type="button"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={handleMenuClick}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      )}
    </header>
  );
}

export default Header;

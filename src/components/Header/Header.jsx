import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header({
  onOpenLogin,
  isModalOpen,
  isLoggedIn,
  onLogout,
  onNavigate,
  currentPage,
  userName,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuToggle() {
    setIsMenuOpen((current) => !current);
  }

  function handleNavigate(page) {
    onNavigate(page);
    setIsMenuOpen(false);
  }

  return (
    <header
      className={`header ${
        currentPage === "home" ? "header_home" : "header_saved"
      }`}
    >
      <button
        className="header__logo"
        type="button"
        onClick={() => handleNavigate("home")}
      >
        NewsExplorer
      </button>

      <button
        className="header__menu-button"
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={handleMenuToggle}
      >
        {isMenuOpen ? "×" : "☰"}
      </button>

      <Navigation
        onOpenLogin={onOpenLogin}
        onLogout={onLogout}
        onNavigate={handleNavigate}
        isModalOpen={isModalOpen}
        isLoggedIn={isLoggedIn}
        currentPage={currentPage}
        userName={userName}
        isMenuOpen={isMenuOpen}
      />
    </header>
  );
}

export default Header;

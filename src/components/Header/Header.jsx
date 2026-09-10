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
  return (
    <header
      className={`header ${
        currentPage === "home" ? "header_home" : "header_saved"
      }`}
    >
      <button
        className="header__logo"
        type="button"
        onClick={() => onNavigate("home")}
      >
        NewsExplorer
      </button>

      <Navigation
        onOpenLogin={onOpenLogin}
        onLogout={onLogout}
        onNavigate={onNavigate}
        isModalOpen={isModalOpen}
        isLoggedIn={isLoggedIn}
        currentPage={currentPage}
        userName={userName}
      />
    </header>
  );
}

export default Header;

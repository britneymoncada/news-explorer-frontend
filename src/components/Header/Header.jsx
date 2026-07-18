import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        NewsExplorer
      </a>

      <Navigation />

      <button
        className="header__menu-button"
        type="button"
        aria-label="Open navigation menu"
      >
        ☰
      </button>
    </header>
  );
}

export default Header;

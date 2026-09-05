import "./Navigation.css";

function Navigation({ onOpenLogin, isMenuOpen }) {
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_open" : ""}`}>
      <a className="navigation__link navigation__link_active" href="/">
        Home
      </a>

      <button
        className="navigation__signin"
        type="button"
        onClick={onOpenLogin}
      >
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;

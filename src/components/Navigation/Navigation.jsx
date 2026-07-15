import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <a className="navigation__link navigation__link_active" href="/">
        Home
      </a>

      <button className="navigation__signin" type="button">
        Sign in
      </button>
    </nav>
  );
}

export default Navigation;

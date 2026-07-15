import Navigation from "../Navigation/Navigation";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        NewsExplorer
      </a>

      <Navigation />
    </header>
  );
}

export default Header;

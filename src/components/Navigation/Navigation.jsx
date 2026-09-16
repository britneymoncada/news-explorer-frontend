import "./Navigation.css";
import logoutIcon from "../../images/logout-icon.svg";
import logoutWhiteIcon from "../../images/logout-white.svg";

function Navigation({
  onOpenLogin,
  onLogout,
  onNavigate,
  isLoggedIn,
  currentPage,
  userName,
  isMenuOpen,
}) {
  return (
    <nav className={`navigation ${isMenuOpen ? "navigation_open" : ""}`}>
      <a
        className={`navigation__link ${
          currentPage === "home" ? "navigation__link_active" : ""
        }`}
        href="/"
        onClick={(event) => {
          event.preventDefault();
          onNavigate("home");
        }}
      >
        Home
      </a>

      {isLoggedIn ? (
        <>
          <a
            className={`navigation__link ${
              currentPage === "saved" ? "navigation__link_active" : ""
            }`}
            href="/saved"
            onClick={(event) => {
              event.preventDefault();
              onNavigate("saved");
            }}
          >
            Saved articles
          </a>

          <button className="navigation__user" type="button" onClick={onLogout}>
            <span className="navigation__username">{userName || "User"}</span>

            <img
              className="navigation__logout-icon"
              src={
                currentPage === "home" || isMenuOpen
                  ? logoutWhiteIcon
                  : logoutIcon
              }
              alt=""
              aria-hidden="true"
            />
          </button>
        </>
      ) : (
        <button
          className="navigation__signin"
          type="button"
          onClick={onOpenLogin}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;

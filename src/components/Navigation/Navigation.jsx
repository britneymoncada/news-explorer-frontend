import "./Navigation.css";
import logoutIcon from "../../images/logout-icon.svg";
import logoutWhiteIcon from "../../images/logout-white.svg";

function Navigation({
  onOpenLogin,
  onLogout,
  onNavigate,
  isLoggedIn,
  currentPage,
  currentUser,
}) {
  return (
    <nav className="navigation">
      <button
        className={`navigation__link ${
          currentPage === "home" ? "navigation__link_active" : ""
        }`}
        type="button"
        onClick={() => onNavigate("home")}
      >
        Home
      </button>

      {isLoggedIn ? (
        <>
          <button
            className={`navigation__link ${
              currentPage === "saved" ? "navigation__link_active" : ""
            }`}
            type="button"
            onClick={() => onNavigate("saved")}
          >
            Saved articles
          </button>

          <button className="navigation__user" type="button" onClick={onLogout}>
            <span className="navigation__username">
              {currentUser?.name || "User"}
            </span>

            <img
              className="navigation__logout-icon"
              src={currentPage === "home" ? logoutWhiteIcon : logoutIcon}
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

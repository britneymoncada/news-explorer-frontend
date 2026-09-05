import "./Footer.css";
import githubIcon from "../../images/github-icon.svg";
import linkedinIcon from "../../images/linkedin-icon.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="footer__text-links">
          <a className="footer__link" href="/">
            Home
          </a>

          <a
            className="footer__link"
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TripleTen
          </a>
        </div>

        <div className="footer__social-links">
          <a
            className="footer__icon-link"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img className="footer__icon" src={githubIcon} alt="GitHub" />
          </a>

          <a
            className="footer__icon-link"
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img className="footer__icon" src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <p className="footer__copyright">© 2026 Supersite, Powered by News API</p>
    </footer>
  );
}

export default Footer;

import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {year} <span>&lt;LengvasKodas /&gt;</span>. Visos teisės saugomos.
        </p>

        <p className="footer-stack">React • Node.js</p>

        <div className="footer-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

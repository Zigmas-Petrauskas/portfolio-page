import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          {" "}
          © {year} <span>&lt;LengvasKodas /&gt;</span>. Visos teisės saugomos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

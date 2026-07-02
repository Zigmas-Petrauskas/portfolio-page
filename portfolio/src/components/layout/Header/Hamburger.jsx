const Hamburger = ({ menuOpen, toggleMenu }) => {
  return (
    <button
      className={`menu-btn ${menuOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <span />
      <span />
      <span />
    </button>
  );
};

export default Hamburger;

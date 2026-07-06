import "./Button.scss";

const Button = ({ children, variant = "primary", onclick }) => {
  return (
    <button className={`btn ${variant}`} onClick={onclick}>
      {children}
    </button>
  );
};

export default Button;

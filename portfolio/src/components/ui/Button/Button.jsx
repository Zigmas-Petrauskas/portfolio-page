import "./Button.scss";

const Button = ({
  children,
  variant = "primary",
  onClick,
  href,
  className = "",
}) => {
  const classes = `btn ${variant} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

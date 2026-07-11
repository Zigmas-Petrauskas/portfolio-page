import buttonPropTypes from "./Button.propTypes";
import Loader from "../Loader/Loader";
import "./Buttons.scss";

const Button = ({
  children,
  type = "button",
  loading = false,
  disabled = false,
  ...props
}) => {
  return (
    <button
      className="button"
      type={type}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? <Loader size={20} /> : children}
    </button>
  );
};

Button.propTypes = buttonPropTypes;

export default Button;

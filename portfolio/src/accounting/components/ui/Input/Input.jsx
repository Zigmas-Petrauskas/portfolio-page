import inputPropTypes from "./Input.propTypes";

import "./Input.scss";

const Input = ({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
  icon,
  ...props
}) => {
  return (
    <div className="input-group">
      {label && <label htmlFor={name}>{label}</label>}

      <div className="input-wrapper">
        {icon && <span className="input-icon">{icon}</span>}

        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          {...(register && register(name))}
          {...props}
        />
      </div>

      {error && <span className="input-error">{error.message}</span>}
    </div>
  );
};

Input.propTypes = inputPropTypes;

export default Input;

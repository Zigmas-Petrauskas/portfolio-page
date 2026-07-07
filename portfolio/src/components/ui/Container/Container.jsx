import "./Container.scss";

const Container = ({ children, className = "" }) => {
  return <div className={`container-ui ${className}`}>{children}</div>;
};

export default Container;

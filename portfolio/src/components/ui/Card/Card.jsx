import "./Card.scss";

const Card = ({ title, children }) => {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;

const ServiceCard = ({ service }) => {
  const { icon: Icon, title, description } = service;

  return (
    <article className="service-card">
      <div className="service-icon">
        <Icon />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
};

export default ServiceCard;

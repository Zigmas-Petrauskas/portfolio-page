import ServiceCard from "./ServiceCard";
import useServices from "./useServices";
import "./Services.scss";

const Services = () => {
  const { servicesData } = useServices();

  return (
    <section className="services" id="services">
      <div className="container services-inner">
        <div className="services-grid">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

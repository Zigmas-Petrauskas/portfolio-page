const PortfolioCard = ({ project }) => {
  const { title, description, image, technologies, github, demo } = project;

  return (
    <article className="portfolio-card">
      <img src={image} alt={title} />

      <div className="porfolio-content">
        <h3>{title}</h3>

        <p>{description}</p>

        <ul className="portfolio-tech">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="portfolio-buttons">
          <a href={github} target="_blank" rel="noreferrer">
            GitHUb
          </a>
          <a href={demo} target="_blank" rel="noreferrer">
            Demo
          </a>
        </div>
      </div>
    </article>
  );
};

export default PortfolioCard;

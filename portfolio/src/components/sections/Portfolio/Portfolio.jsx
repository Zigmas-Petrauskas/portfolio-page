import PortfolioCard from "./PortfolioCard";
import usePortfolio from "./usePortfolio";
import "./Portfolio.scss";

const Portfolio = () => {
  const { portfolioData } = usePortfolio();

  return (
    <section className="portfolio" id="portfolio">
      <div className="container portfolio-inner">
        <div className="portfolio-grid">
          {portfolioData.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

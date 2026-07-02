import HeroButtons from "./HeroButtons";
import useHero from "./useHero";
import "./Hero.scss";

const Hero = () => {
  useHero();

  return (
    <section className="hero" id="hero">
      <div className="container hero-inner">
        <div className="hero-content">
          <span>Junior Full Stack Developer</span>

          <h2>
            Kuriu modernias React aplikacijas
          </h2>

          <p>React • JavaScript • Node.js • Express • MariaDB</p>

          <HeroButtons />
        </div>

        <div className="hero-code">{"</>"}</div>
      </div>
    </section>
  );
};

export default Hero;

import HeroButtons from "./HeroButtons";
import useHero from "./useHero";
import Container from "../../ui/Container/Container";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./Hero.scss";

const Hero = () => {
  useHero();

  return (
    <section className="hero" id="hero">
      <Container className="container hero-inner">
        <SectionTitle title="Kuriu modernias React aplikacijas" />

        <p>React • JavaScript • Node.js • Express • MariaDB</p>

        <HeroButtons />

        <div className="hero-code">{"</>"}</div>
      </Container>
    </section>
  );
};

export default Hero;

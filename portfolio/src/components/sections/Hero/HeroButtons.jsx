import Button from "../../ui/Button/Button";

const HeroButtons = () => {
  return (
    <div className="hero-buttons">
      <Button href="/portfolio" className="hero-btn">
        Portfolio
      </Button>
      <Button href="/contact" className="hero-btn secondary">
        Susisiekti
      </Button>
    </div>
  );
};

export default HeroButtons;

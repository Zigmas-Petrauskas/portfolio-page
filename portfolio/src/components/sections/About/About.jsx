import AboutGoals from "./AboutGoals";
import useAbout from "./useAbout";
import SectionTitle from "../../ui/SectionTitle/SectionTitle";
import "./About.scss";

const About = () => {
  const { showMore, setShowMore } = useAbout();

  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <SectionTitle
          // subtitle="Apie mane"
          title="Junior Full Stack programuotojas"
          description="Kuriu modernias web aplikacijas"
        />

        <p className="about-description">
          Dirbu su React, Node.js ir MySQL. Mano tikslas – kurti švarius,
          greitus ir lengvai prižiūrimus projektus.
        </p>

        <AboutGoals />
      </div>
    </section>
  );
};

export default About;

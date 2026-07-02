import AboutGoals from "./AboutGoals";
import useAbout from "./useAbout";
import "./About.scss";

const About = () => {
  const { showMore, setShowMore } = useAbout();

  return (
    <section className="about" id="about">
      <div className="container about-inner">
        <div className="about-header">
          <h2>
            Junior Full Stack programuotojas, kuriantis modernias web
            aplikacijas
          </h2>

          <p>
            Dirbu su React, Node.js ir MySQL. Mano tikslas – kurti švarius,
            greitus ir lengvai prižiūrimus projektus.
          </p>
        </div>

        <AboutGoals />
      </div>
    </section>
  );
};

export default About;

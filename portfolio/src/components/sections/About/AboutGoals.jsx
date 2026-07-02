import aboutGoals from "../../../data/aboutGoals";

const AboutGoals = () => {
  return (
    <div className="about-goals">
      {aboutGoals.map((item) => (
        <div className="about-card" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutGoals;

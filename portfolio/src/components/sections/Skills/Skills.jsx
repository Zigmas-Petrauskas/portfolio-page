import useSkills from "./useSkills";
import SkillCard from "./SkillCard";
import "./Skills.scss";

const Skills = () => {
  const { skills } = useSkills();

  return (
    <section className="skills" id="skills">
      <div className="container skills-inner">
        <div className="skills-header">
          <h2>Ką aš moku</h2>
          <p>Technologijos, su kuriomis dirbu kasdien</p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              title={skill.title}
              items={skill.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

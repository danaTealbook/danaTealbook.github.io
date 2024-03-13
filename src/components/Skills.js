import React from "react";

const techSkills = [
  "Javascript",
  "Typescript",
  "React",
  "Node",
  "JQuery",
  "HTML5",
  "CSS3",
  "Java",
  "C",
  "C++",
  "SQL",
  "Shell",
  "Python",
  "MySQL",
  "MongoDB",
  "Git",
  "Jenkins",
  "Jira",
  "SVN",
  "JSON",
  "RESTful APIs",
  "Photoshop",
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="heading">My Skills</h2>

      <div className="skills-row">
        <div className="skills-column">
          <h3 className="subheading">Coding Skills</h3>
          <div className="skills-list-box">
            {techSkills.map((techSkill, index) => (
              <li key={index}>{techSkill}</li>
            ))}
          </div>
        </div>

        <div className="skills-column">
          <h3 className="subheading">Professional Skills</h3>
          <li>Javascript</li>
          <li>TypeScript</li>
          <li>HTML</li>
          <li>CSS</li>
        </div>
      </div>
    </section>
  );
}

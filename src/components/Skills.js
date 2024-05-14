import React from "react";
import TechSkillIcons from "./TechSkillIcons";
import SlideEffect from "./SlideEffect";
import { Grid } from "@mui/material";

const techSkills = {
  Web: [
    "Javascript (ES6+)",
    "Typescript",
    "React",
    "CSS3",
    "HTML5",
    "JQuery",
    "Node JS",
  ],
  Languages: [
    "Javascript",
    "Typescript",
    "Java",
    "C",
    "C++",
    "SQL",
    "Shell",
    "Python",
  ],
  "Tools & Environments": [
    "Visual Studio Code",
    "IntelliJ IDEA",
    "Android Studio",
    "Eclipse IDE",
    "SoapUI",
  ],
  Databases: ["MySQL", "MongoDB"],
  "DevOps & Collaboration": ["Git", "Jenkins", "SVN", "Jira"],
  Others: ["JSON", "RESTful APIs", "Adobe Photoshop"],
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <SlideEffect inAnimation="animate__animated animate__pulse">
        <h2 className="heading">My Skills</h2>
      </SlideEffect>

      <SlideEffect inAnimation="animate__animated animate__pulse">
        <TechSkillIcons />
      </SlideEffect>

      <Grid container spacing={2}>
        {Object.entries(techSkills).map(([category, skills]) => (
          <Grid item xs={12} sm={6} xl={3} key={category}>
            <SlideEffect
              inAnimation="animate__animated animate__fadeInLeft"
              outAnimation="animate__animated animate__fadeOutLeft"
            >
              <h3 className="subheading">{category}</h3>
              <div className="skills-list-box">
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </div>
            </SlideEffect>
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

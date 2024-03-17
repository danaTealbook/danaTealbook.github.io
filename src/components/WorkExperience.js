import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const experienceList = [
  {
    title: "Software Engineer",
    date: "Dec 2020 - Nov 2023",
    company: "Tealbook",
    logo: "images/tealbookLogo.jpeg",
    tasks: [
      "Spearheaded the front-end development of a SaaS application, employing Typescript and React for cleaner, maintainable code, which reduced bux-fixing time by 20%.",
      "Enhanced unit test coverage from 40% to 75% with Jest and React Testing Library, significantly improving code quality.",
      "Facilitated cross-functional collaboration to develop complex features, reducing support ticket volume by over 20% and improving user workflows.",
      "Automated data retrieval processes, slashing Data Team’s retrieval time by 70%.",
      "Acted as Scrum Master, leading sprints and ensuring on-time project delivery through effective team collaboration.",
    ],
  },
  {
    title: "Frontend Developer",
    date: "Mar 2020 - Aug 2020",
    company: "Air-Tek",
    logo: "images/airTekLogo.png",
    tasks: [
      "Implemented UI components in Typescript/Javascript for real-time, distributed applications, reducing frontend bugs by 15%, resulting in smoother, error-free user interactions.",
      "Developed feature-rich web applications using React and Node.js, achieving a 6% improvement in site responsiveness.",
      "Created a user-friendly pattern library using Storybook.js, enhancing design and development team collaboration.",
      "Improved mobile responsiveness, leading to enhanced accessibility and user engagement on mobile platforms.",
    ],
  },
  {
    title: "QA Engineer",
    date: "Jun 2015 - Jan 2020",
    company: "Privacy Analytics",
    logo: "images/privacyAnalyticsLogo.jpg",
    tasks: [
      "Debugged and optimized testing frameworks, decreasing automated test error rates by 60%.",
      "Automated over 900 tests, significantly improving testing efficiency and project delivery timelines.",
      "Gathered requirements, documented, and prepared data for tests, helping the team to complete projects ahead of time in the final quarter, breaking internal records.",
      "Trained other team members to use the testing framework.",
      "Played a key role in the development and optimization of quality assessment processes, enhancing testing framework efficiency.",
    ],
  },
  {
    title: "Bachelor of Computer Science, (with Distinction)",
    date: "Sep 2011 - Jun 2015",
    company: "University of Waterloo",
    logo: "images/waterlooLogo.png",
    tasks: [],
  },
  {
    title: "Diploma in Economic Management, (with Distinction)",
    date: "Sep 2005 - Jun 2009",
    company: "Kazakh-Turkish College of Economics",
    logo: "images/collegeLogo.jpeg",
    tasks: [],
  },
];

export default function WorkExperience() {
  return (
    <VerticalTimeline animate lineColor="#2cbaf5">
      {experienceList.map((experience) => (
        <VerticalTimelineElement
          className="experience"
          contentStyle={{
            background: "transparent",
            color: "#ededed",
            border: "2px solid #2cbaf5",
            borderRadius: "0.8rem",
            boxShadow: "none",
            fontSize: "1.6rem",
          }}
          contentArrowStyle={{
            borderRight: "7px solid #2cbaf5",
          }}
          date={experience.date}
          dateClassName="experience-date"
          iconStyle={{ background: "#fff" }}
          icon={
            <div className="experience-icon">
              <img src={experience.logo} />
            </div>
          }
        >
          <h3>{experience.title}</h3>
          <h4>{experience.company}</h4>
          {experience.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

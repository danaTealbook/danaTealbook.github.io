import React from "react";
import SlideEffect from "./SlideEffect";
import WorkExperience from "./WorkExperience";

export default function AboutMe() {
  return (
    <section className="about" id="about">
      <SlideEffect inAnimation="animate__animated animate__pulse">
        <h2 className="heading">About Me</h2>
      </SlideEffect>

      <SlideEffect inAnimation="animate__animated animate__pulse">
        <div className="about-img">
          <img src="images/about.png" alt="about-me" />
          <span className="circle-spin"></span>
        </div>
      </SlideEffect>

      <SlideEffect
        inAnimation="animate__animated animate__fadeIn"
        outAnimation="animate__animated animate__fadeOut"
      >
        <div className="about-content">
          <h3 className="subheading">Frontend Developer</h3>
          <p>
            Experienced Frontend Developer specializing in the design and
            implementation of real-time, distributed web applications. Skilled
            in the latest technologies such as React, TypeScript, and Node.js, I
            am passionate about creating seamless and engaging user experiences.
            <br /> With a strong foundation as a QA Engineer for 4 years, I
            bring a unique perspective to development, cultivating a
            user-centric approach. Let's connect and discuss how my diverse
            skill set can contribute to your team's success.
          </p>
        </div>
      </SlideEffect>

      <h3 className="subheading">Experience and Education</h3>
      <WorkExperience />
    </section>
  );
}

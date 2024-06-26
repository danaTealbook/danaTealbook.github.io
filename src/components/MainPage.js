import React from "react";
import TrackVisibility from "react-on-screen";
import SlideEffect from "./SlideEffect";
import StarsCanvas from "./Stars";

export default function MainPage() {
  return (
    <div className="main-page">
      <StarsCanvas />
      <section className="home" id="home">
        <div className="home-content">
          <SlideEffect
            inAnimation="animate__animated animate__fadeInLeft"
            outAnimation="animate__animated animate__fadeOutLeft"
          >
            <h1>
              Hi, I'm <span>Dana Kenzhaliyeva</span>
            </h1>
          </SlideEffect>
          <SlideEffect
            inAnimation="animate__animated animate__fadeInLeft"
            outAnimation="animate__animated animate__fadeOutLeft"
            delay={0.2}
          >
            <h3>Frontend Developer</h3>
          </SlideEffect>
          <SlideEffect
            inAnimation="animate__animated animate__fadeInLeft"
            outAnimation="animate__animated animate__fadeOutLeft"
            delay={0.4}
          >
            <p>
              Experienced Frontend Developer specializing in web applications.
              My goal is to make websites easy to use and enjoyable for
              everyone.
            </p>
          </SlideEffect>
          <SlideEffect
            inAnimation="animate__animated animate__fadeInLeft"
            outAnimation="animate__animated animate__fadeOutLeft"
            delay={0.6}
          >
            <a
              className="btn"
              href="resume/Dana Kenzhaliyeva.pdf"
              download="Resume.pdf"
            >
              Download CV
            </a>
          </SlideEffect>
          <SlideEffect
            inAnimation="animate__animated animate__fadeInLeft"
            outAnimation="animate__animated animate__fadeOutLeft"
            delay={0.8}
          >
            <div className="home-sci">
              <a
                href="https://www.linkedin.com/in/dana-dk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://github.com/danaTealbook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bxl-github"></i>
              </a>
            </div>
          </SlideEffect>
        </div>

        <div className="home-img">
          <img src="images/mainPhoto.png" alt="home-image" />
        </div>
      </section>
    </div>
  );
}

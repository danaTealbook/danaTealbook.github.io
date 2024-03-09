import React from "react";

export default function AboutMe() {
    return (
        <section className="about" id="about">
            <h2 className="heading">About Me</h2>

            <div className="about-img">
                <img src="images/about.png" alt="" />
                <span className="circle-spin"></span>
            </div>

            <div className="about-content">
                <h3 className="subheading">Frontend Developer</h3>
                <p>Experienced Frontend Developer specializing in the design and implementation of real-time, distributed web applications. Skilled in the latest technologies such as React, TypeScript, and Node.js, I am passionate about creating seamless and engaging user experiences.
                    <br /> With a strong foundation as a QA Engineer for 4 years, I bring a unique perspective to development, cultivating a user-centric approach. Let's connect and discuss how my diverse skill set can contribute to your team's success.</p>
                <div className="btn-box btns">
                    <a href="#" className="btn">Read More</a>
                </div>
            </div>
        </section>
    )
}
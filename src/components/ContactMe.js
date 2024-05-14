import React, { useState } from "react";
import SlideEffect from "./SlideEffect";
import ParticlesBackground from "./ParticlesBackground";

export default function ContactMe({ showParticles }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const { fullName, email, phone, subject, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailBodyMessage = `Name: ${fullName}<br> Email: ${email}<br> Phone: ${phone}<br> Message: ${message}`;

    Email.send({
      SecureToken: "15f1e429-202f-41da-b817-e59d9cee5fb1",
      Host: "smtp.elasticemail.com",
      Username: "max1989x@gmail.com",
      Password: "1A85DA766B0E2F5786E0B2A58696CFEBDFC3",
      To: "dana89ktk@gmail.com",
      From: "max1989x@gmail.com",
      Subject: subject,
      Body: emailBodyMessage,
    }).then((message) => {
      if (message == "OK") {
        Swal.fire({
          title: "Success",
          text: "Message sent successfully",
          icon: "success",
        });
      } else {
        alert("Oops, something went wrong. Please, try again later.");
      }
    });

    // reset()
    // return false
  };

  return (
    <section className="contact" id="contact">
      {showParticles && <ParticlesBackground />}

      <SlideEffect inAnimation="animate__animated animate__pulse">
        <h2 className="heading">Contact Me</h2>
      </SlideEffect>

      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              name="fullName"
              value={fullName}
              onChange={handleChange}
              required
            ></input>
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChange}
              required
            ></input>
            <span className="focus"></span>
          </div>
        </div>

        <div className="input-box">
          <div className="input-field">
            <input
              type="number"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={handleChange}
              required
            ></input>
            <span className="focus"></span>
          </div>
          <div className="input-field">
            <input
              type="text"
              placeholder="Email Subject"
              name="subject"
              value={subject}
              onChange={handleChange}
              required
            ></input>
            <span className="focus"></span>
          </div>
        </div>

        <div className="textarea-field">
          <textarea
            id=""
            cols={30}
            rows={10}
            placeholder="Your Message"
            name="message"
            value={message}
            onChange={handleChange}
            required
          ></textarea>
          <span className="focus"></span>
        </div>

        <button type="submit" className="btn btns">
          Submit
        </button>
      </form>
    </section>
  );
}

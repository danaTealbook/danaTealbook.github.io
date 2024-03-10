import React from "react"

export default function ContactMe() {
    return (
        <section className="contact" id="contact">
            <h2 className="heading">Contact Me</h2>

            <form action="#">
                <div className="input-box">
                    <div className="input-field">
                        <input type="text" placeholder="Full Name" required></input>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="email" placeholder="Email Address" required></input>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="input-box">
                    <div className="input-field">
                        <input type="number" placeholder="Phone Number" required></input>
                        <span className="focus"></span>
                    </div>
                    <div className="input-field">
                        <input type="text" placeholder="Email Subject" required></input>
                        <span className="focus"></span>
                    </div>
                </div>

                <div className="textarea-field">
                    <textarea name="" id="" cols={30} rows={10} placeholder="Your Message" required></textarea>
                    <span className="focus"></span>
                </div>

                <button type="submit" className="btn btns">Submit</button>

            </form>
        </section>
    )
}
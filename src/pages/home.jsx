import { useState } from "react";
import "./Home.css";
import campusImage from "../assets/campus.png";

const Home = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ email, message });
    // Clear form after submission
    setEmail("");
    setMessage("");
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="main-section">
          <div className="left-column">
            <h1 className="main-heading">
              <span className="heading-blue">Vent to a</span><br />
              <span className="heading-blue">fellow</span><br />
              <span className="heading-green">Dartmouth</span><br />
              <span className="heading-green">student!</span>
            </h1>

            <p className="description">
              Talk anonymously with other students for advice, support, or just to vent! Peer support helps
              connect students on campus with trained responders that can provide empathy, advice, and
              helpful resources.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email" className="form-label">Your Net ID Dartmouth Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  placeholder="YourNetID@dartmouth.edu"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Write your message here. A volunteering student will reply to your anonymous message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>

            <div className="footer-section">
              <p className="footer-text">Peer Support is made possible by Mental Health Union.</p>
              <p className="footer-text">
                Peer Support is not a crisis or emergency resource. If you or a friend are in a crisis,{" "}
                <a href="/mentalhealthresources" className="footer-link">
                  click here for a list of crisis resources
                </a>{" "}
                or call 911.
              </p>
            </div>
          </div>

          <div className="right-column">
            <img src={campusImage} alt="Dartmouth Campus" className="campus-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
import { useState } from "react";
import "./getinvolved.css";

const GetInvolved = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    interest: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Form submission logic would go here
    alert("Thank you for your interest! We'll be in touch soon.");
    setFormData({
      name: "",
      email: "",
      year: "",
      interest: ""
    });
  };

  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-heading">Get Involved</h1>
        <p className="page-description">
          There are multiple ways to get involved with Peer Support at Dartmouth. 
          Join our team and make a meaningful impact on campus mental health!
        </p>
        
        <div className="involvement-section">
          <div className="involvement-card">
            <h2 className="involvement-title">Peer Coach Internship Program</h2>
            <p className="involvement-text">
              Over the past few terms, we&rsquo;ve been collaborating with staff at the Student Wellness Center to improve the 
              current Peer Support model. They have proposed a Peer Coach internship program, where 3-5 students will join 
              the SWC&rsquo;s Wellness Check-in team.
            </p>
            <p className="involvement-text">
              This paid internship is available for &rsquo;26s, &rsquo;27s, and &rsquo;28s and will allow selected students to actively use the skills
              they gained through Peer Support training. For more information, please reach out to us at <a href="mailto:mhu@dartmouth.edu" className="contact-email">mhu@dartmouth.edu</a> or
              to our Peer Support student directors:
            </p>
            
            <ul className="contact-list">
              <li className="contact-item">
                <span className="contact-name">Chelsea Mills &rsquo;26</span>
                <a href="mailto:chelsea.k.mills.26@dartmouth.edu" className="contact-email">chelsea.k.mills.26@dartmouth.edu</a>
              </li>
              <li className="contact-item">
                <span className="contact-name">Elaine Sarazen &rsquo;25</span>
                <a href="mailto:elaine.f.sarazen.25@dartmouth.edu" className="contact-email">elaine.f.sarazen.25@dartmouth.edu</a>
              </li>
              <li className="contact-item">
                <span className="contact-name">Sreeya Pittala &rsquo;26</span>
                <a href="mailto:sreeya.pittala.26@dartmouth.edu" className="contact-email">sreeya.pittala.26@dartmouth.edu</a>
              </li>
              <li className="contact-item">
                <span className="contact-name">Melissa Gonzalez &rsquo;25</span>
                <a href="mailto:melissa.gonzalez.25@dartmouth.edu" className="contact-email">melissa.gonzalez.25@dartmouth.edu</a>
              </li>
            </ul>
          </div>
          
          <div className="application-section">
            <h2 className="application-title">Become a Peer Supporter</h2>
            <p className="application-text">
              We&rsquo;re always looking for compassionate, dedicated students to join our team as peer supporters.
              As a peer supporter, you&rsquo;ll receive comprehensive training and make a real difference in the lives of fellow students.
            </p>
            
            <h3>Requirements:</h3>
            <ul className="requirements-list">
              <li>Currently enrolled Dartmouth student</li>
              <li>Ability to commit to 50+ hours of training</li>
              <li>Strong interpersonal and communication skills</li>
              <li>Genuine interest in supporting peers&rsquo; mental health</li>
              <li>Willingness to maintain confidentiality</li>
            </ul>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="form-label">Dartmouth Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@dartmouth.edu"
                  className="form-control"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="year" className="form-label">Class Year</label>
                <select
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  <option value="">Select Your Class Year</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="interest" className="form-label">Why are you interested in becoming a Peer Supporter?</label>
                <textarea
                  id="interest"
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  placeholder="Share your motivation for joining our team..."
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn">Submit Application</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-heading">About Us</h1>
        <p className="page-description">
          Peer Support is a student-led initiative at Dartmouth College that connects students with 
          trained peer responders who can provide empathy, support, and resources during difficult times.
        </p>
        
        <div className="about-section">
          <h2 className="section-heading">Our Mission</h2>
          <p className="section-text">
            We believe that students sometimes just need someone to talk to who understands what they&rsquo;re going through.
            Our mission is to create a supportive community where Dartmouth students can openly discuss their 
            challenges, receive empathy, and connect with helpful resources.
          </p>
        </div>
        
        <div className="about-section">
          <h2 className="section-heading">Peer Support Student Directors</h2>
          <div className="team-grid">
            <div className="team-member card">
              <h3>Chelsea Mills &rsquo;26</h3>
              <p>Student Director</p>
            </div>
            <div className="team-member card">
              <h3>Elaine Sarazen &rsquo;25</h3>
              <p>Student Director</p>
            </div>
            <div className="team-member card">
              <h3>Sreeya Pittala &rsquo;26</h3>
              <p>Student Director</p>
            </div>
            <div className="team-member card">
              <h3>Melissa Gonzalez &rsquo;25</h3>
              <p>Student Director</p>
            </div>
          </div>
        </div>
        
        <div className="about-section">
          <h2 className="section-heading">Peer Supporters</h2>
          <p className="section-text">
            Peer support volunteers are Dartmouth undergraduate students who have undergone 50+ hours of training
            with staff from Student Affairs offices, including the Counseling Center and the Student Wellness Center.
          </p>
          <p className="section-text">
            All peer supporters are trained in active listening, empathy, crisis response, and connecting students
            with appropriate campus resources.
          </p>
          
          <div className="supporters-container">
            <p className="supporters-note">Our current team of peer supporters includes students from diverse backgrounds, 
            majors, and class years. Each supporter brings their unique perspective and experience to help fellow students.</p>
          </div>
        </div>
        
        <div className="cta-section">
          <h2 className="section-heading">Join Our Team</h2>
          <p className="section-text">
            Interested in becoming a Peer Supporter? We&rsquo;re always looking for compassionate 
            students who want to make a difference in our campus community. Check back for updates in a few months!
          </p>
          <Link to="/getinvolved" className="btn">Get Involved</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
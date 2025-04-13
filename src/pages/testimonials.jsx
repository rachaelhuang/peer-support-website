import "./testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h1 className="testimonials-heading">Student Testimonials</h1>
        <p className="testimonials-description">
          Hear from Dartmouth students who have benefited from our peer support services.
        </p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-quote">
              &ldquo;Peer Support provided me with a safe space to talk when I was going through a difficult time. Having another student listen without judgment made all the difference.&rdquo;
            </div>
            <div className="testimonial-author">- Class of 2023</div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-quote">
              &ldquo;I was hesitant to reach out at first, but I&rsquo;m so glad I did. The peer responder was empathetic and provided resources I didn&rsquo;t know existed on campus.&rdquo;
            </div>
            <div className="testimonial-author">- Class of 2024</div>
          </div>
          
          <div className="testimonial-card">
            <div className="testimonial-quote">
              &ldquo;Being able to vent anonymously about my academic stress helped me gain perspective. The conversations I had through Peer Support helped me develop better coping strategies.&rdquo;
            </div>
            <div className="testimonial-author">- Class of 2025</div>
          </div>
        </div>
        
        <div className="share-testimonial">
          <h2>Share Your Experience</h2>
          <p>If Peer Support has helped you and you&rsquo;d like to share your anonymous testimonial, please email us at <a href="mailto:peer.support@dartmouth.edu">peer.support@dartmouth.edu</a></p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials; 
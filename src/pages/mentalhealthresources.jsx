import { Link } from "react-router-dom";
import "./mentalhealthresources.css";

const MentalHealthResources = () => {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1 className="page-heading">Mental Health Resources</h1>
        <p className="page-description">
          Access to mental health resources is vital for student well-being. 
          Below you&rsquo;ll find crisis resources and comprehensive support options available to the Dartmouth community.
        </p>
        
        <div className="crisis-section">
          <h2 className="crisis-title">Crisis Resources</h2>
          <p>If you or someone you know is experiencing a mental health crisis, please contact these resources immediately:</p>
          
          <div className="crisis-resources">
            <div className="crisis-item">
              <div className="crisis-item-title">National Suicide & Crisis Lifeline</div>
              <div className="crisis-item-contact">Call or text 988</div>
            </div>
            
            <div className="crisis-item">
              <div className="crisis-item-title">Crisis Text Line</div>
              <div className="crisis-item-contact">Text HOME to 741741</div>
            </div>
            
            <div className="crisis-item">
              <div className="crisis-item-title">Dartmouth Safety & Security</div>
              <div className="crisis-item-contact">(603) 646-4000</div>
            </div>
            
            <div className="crisis-item">
              <div className="crisis-item-title">Counseling Center On-Call</div>
              <div className="crisis-item-contact">(603) 646-9442</div>
            </div>
          </div>
        </div>
        
        <div className="resources-container">
          <h2 className="section-heading">Campus Resources</h2>
          
          <div className="resources-grid">
            <div className="resource-card">
              <h3 className="resource-title">Dartmouth Counseling Center</h3>
              <p className="resource-description">
                Offers confidential mental health services to students, including individual therapy, 
                group therapy, medication management, and crisis intervention.
              </p>
              <div className="resource-contact">Phone: (603) 646-9442</div>
              <div className="resource-contact">Location: 7 Rope Ferry Road, 3rd Floor</div>
              <a href="https://students.dartmouth.edu/health-service/counseling" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website
              </a>
            </div>
            
            <div className="resource-card">
              <h3 className="resource-title">Student Wellness Center</h3>
              <p className="resource-description">
                Provides resources for maintaining physical and mental wellness, including stress management, 
                mindfulness programs, and wellness coaching.
              </p>
              <div className="resource-contact">Phone: (603) 646-9414</div>
              <div className="resource-contact">Location: Robinson Hall, 3rd Floor</div>
              <a href="https://students.dartmouth.edu/wellness-center/" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website
              </a>
            </div>
            
            <div className="resource-card">
              <h3 className="resource-title">Academic Skills Center</h3>
              <p className="resource-description">
                Offers resources to help with academic stress, time management, and study strategies, 
                which can contribute to better mental health.
              </p>
              <div className="resource-contact">Phone: (603) 646-2014</div>
              <div className="resource-contact">Location: Baker-Berry Library, Suite 224</div>
              <a href="https://students.dartmouth.edu/academic-skills/" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website
              </a>
            </div>
            
            <div className="resource-card">
              <h3 className="resource-title">OPAL (Office of Pluralism and Leadership)</h3>
              <p className="resource-description">
                Provides support for students from diverse backgrounds, offering resources for identity-related stress and challenges.
              </p>
              <div className="resource-contact">Phone: (603) 646-0987</div>
              <div className="resource-contact">Location: Collis Center, Room 211</div>
              <a href="https://students.dartmouth.edu/opal/" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website
              </a>
            </div>
            
            <div className="resource-card">
              <h3 className="resource-title">Title IX Office</h3>
              <p className="resource-description">
                Provides support and resources for those affected by sexual harassment, assault, or relationship violence.
              </p>
              <div className="resource-contact">Phone: (603) 646-0922</div>
              <a href="https://www.dartmouth.edu/titleix/" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website
              </a>
            </div>
            
            <div className="resource-card">
              <h3 className="resource-title">Tucker Center for Spiritual and Ethical Life</h3>
              <p className="resource-description">
                Offers spiritual guidance and support for students of all faiths and beliefs seeking meaning, purpose, and community.
              </p>
              <div className="resource-contact">Phone: (603) 646-3780</div>
              <div className="resource-contact">Location: South Fairbanks Hall</div>
              <a href="https://students.dartmouth.edu/tucker/" target="_blank" rel="noopener noreferrer" className="resource-link">
                Visit Website
              </a>
            </div>
          </div>
        </div>
        
        <div className="resources-container">
          <h2 className="section-heading">Additional Resource Categories</h2>
          <p>For more resources regarding specific needs, please see the Mental Health Union&rsquo;s comprehensive Resource Sheet:</p>
          
          <div className="categories-list">
            <div className="category-item">- Food insecurity</div>
            <div className="category-item">- Housing insecurity</div>
            <div className="category-item">- Accessibility services</div>
            <div className="category-item">- Medical advice</div>
            <div className="category-item">- Substance use</div>
            <div className="category-item">- Eating disorders</div>
            <div className="category-item">- Sexual health</div>
            <div className="category-item">- Sexual and gender-based violence</div>
            <div className="category-item">- LGBTQIA+ resources</div>
            <div className="category-item">- Gender affirming care</div>
            <div className="category-item">- Financial aid</div>
            <div className="category-item">- Supporting others</div>
            <div className="category-item">- Grief and loss</div>
          </div>
          
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <a 
              href="https://docs.google.com/document/d/1naATTIDD0CUE_bn2ptdOFhvn81iRV44MpnU27jTWKNc/edit?tab=t.0" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn"
            >
              View Complete Resource Guide
            </a>
          </div>
        </div>
        
        <div style={{ marginTop: "3rem", textAlign: "center" }}>
          <h3>Need someone to talk to?</h3>
          <p style={{ marginBottom: "1.5rem" }}>Connect with a fellow student through our peer support service.</p>
          <Link to="/" className="btn">Contact Peer Support</Link>
        </div>
      </div>
    </div>
  );
};

export default MentalHealthResources;
import React from "react";
import heroImg from "../assets/hero.jpeg";
import reactImg from "../assets/react.jpg";
import jsImg from "../assets/javascript.jpg";
import nodeImg from "../assets/node.jpg";

const Home = () => {
  const courses = [
    {
      id: 1,
      title: "React Development",
      image: reactImg,
      desc: "Build modern and responsive user interfaces using React.",
      duration: "8 Weeks",
      price: "₹1999",
    },
    {
      id: 2,
      title: "JavaScript Mastery",
      image: jsImg,
      desc: "Learn JavaScript from fundamentals to advanced concepts.",
      duration: "6 Weeks",
      price: "₹1499",
    },
    {
      id: 3,
      title: "Node.js Backend",
      image: nodeImg,
      desc: "Create scalable backend applications with Node.js and Express.",
      duration: "10 Weeks",
      price: "₹2499",
    },
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-text">
          <p className="hero-tag">Learn Smart. Build Skills. Grow Fast.</p>
          <h1>Learn Skills Online</h1>
          <p className="hero-desc">
            Join thousands of students learning programming, web development and
            modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="/courses" className="btn primary-btn">
              Explore Courses
            </a>
            <a href="/register" className="btn secondary-btn">
              Get Started
            </a>
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Learning" />
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Featured Courses</h2>
          <p>Choose from our most popular courses.</p>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <div className="course-card" key={course.id}>
              <img src={course.image} alt={course.title} />
              <div className="course-card-content">
                <h3>{course.title}</h3>
                <p>{course.desc}</p>

                <div className="course-info">
                  <span>{course.duration}</span>
                  <span>{course.price}</span>
                </div>

                <a href="/courses" className="card-btn">
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="features">

  <div className="feature-card">
    <h3>Expert Instructors</h3>
    <p>Learn from experienced developers and industry experts.</p>
  </div>

  <div className="feature-card">
    <h3>Real Projects</h3>
    <p>Work on practical projects to strengthen your skills.</p>
  </div>

  <div className="feature-card">
    <h3>Lifetime Access</h3>
    <p>Get unlimited access to course materials anytime.</p>
  </div>

  <div className="feature-card">
    <h3>Career Support</h3>
    <p>Guidance for building your portfolio and getting jobs.</p>
  </div>

</section>

<section className="testimonial">
  <h2>What Our Students Say</h2>

  <div className="testimonial-wrapper">
    <div className="testimonial-box">
      <img src="https://i.pravatar.cc/80?img=12" alt="student" />
      <p>
        "This platform helped me understand React and build real projects.
        Highly recommended for beginners!"
      </p>
      <h4>- Rahul Sharma</h4>
    </div>

    <div className="testimonial-box">
      <img src="https://i.pravatar.cc/80?img=32" alt="student" />
      <p>
        "The courses are simple, practical, and very easy to follow. I really
        liked the clean design."
      </p>
      <h4>- Priya Verma</h4>
    </div>

    <div className="testimonial-box">
      <img src="https://i.pravatar.cc/80?img=15" alt="student" />
      <p>
        "I improved my frontend skills and understood JavaScript concepts much
        better with this platform."
      </p>
      <h4>- Aman Kumar</h4>
    </div>
  </div>
</section>


{/* WHY CHOOSE US */}

<section className="why-section">

  <div className="section-header">
    <h2>Why Choose Us</h2>
    <p>We make learning simple, practical, and career-focused.</p>
  </div>

  <div className="why-grid">

    <div className="why-card">
      <div className="why-icon">🎯</div>
      <h3>Practical Learning</h3>
      <p>
        Learn with real examples and project-based content that helps you build real skills.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">👨‍🏫</div>
      <h3>Expert Guidance</h3>
      <p>
        Understand concepts easily with structured lessons and proper guidance.
      </p>
    </div>

    <div className="why-card">
      <div className="why-icon">🚀</div>
      <h3>Career Focused</h3>
      <p>
        Courses designed to help students prepare for internships and jobs.
      </p>
    </div>

  </div>

</section>

    </div>

    
  );
  
};

export default Home;
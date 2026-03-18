import React, { useEffect, useState } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h1>Explore Courses</h1>

      <div className="courses-container">
        {courses.map((course) => (
          <div className="card" key={course.id}>
            
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              alt="coding"
            />

            <div className="card-content">
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Price:</strong> {course.price}</p>

              <button>Enroll Now</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
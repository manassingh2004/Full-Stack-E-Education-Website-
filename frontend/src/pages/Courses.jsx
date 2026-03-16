import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.log("Error fetching courses:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.category.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div className="courses-page">
        <div className="courses-header">
          <h1>Our Courses</h1>
          <p>Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="courses-page">
      <div className="courses-header">
        <h1>Our Courses</h1>
        <p>Choose the right course and start learning today.</p>
      </div>

      <div className="course-search-box">
        <input
          type="text"
          placeholder="Search courses by name or category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="courses-wrapper">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div className="course-card" key={course.id}>
              <div className="course-card-content">
                <span className="course-category">{course.category}</span>
                <h3>{course.title}</h3>
                <p>{course.desc}</p>

                <div className="course-meta">
                  <span>{course.duration}</span>
                  <span>{course.level}</span>
                  <span>{course.instructor}</span>
                </div>

                <div className="course-footer">
                  <h4>{course.price}</h4>
                  <button onClick={() => navigate(`/course/${course.id}`)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="no-course-found">No courses found.</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
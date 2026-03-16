import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import reactImg from "../assets/react.jpg";
import jsImg from "../assets/javascript.jpg";
import nodeImg from "../assets/node.jpg";

const CourseDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  const courseImages = {
    1: reactImg,
    2: jsImg,
    3: nodeImg,
  };

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/courses/${id}`);
        const data = await response.json();
        setCourse(data);
      } catch (error) {
        console.log("Error fetching course:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="course-detail-page">
        <div className="course-detail-card">
          <div className="course-detail-content">
            <h1>Loading...</h1>
            <p className="detail-desc">Please wait while course details load.</p>
          </div>
        </div>
      </div>
    );
  }

  if (!course || course.message) {
    return (
      <div className="course-detail-page">
        <div className="course-detail-card">
          <div className="course-detail-content">
            <h1>Course Not Found</h1>
            <p className="detail-desc">
              The course you are looking for does not exist.
            </p>
            <button
              className="detail-enroll-btn"
              onClick={() => navigate("/courses")}
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="course-detail-card">
        <div className="course-detail-image">
          <img
            src={courseImages[course.id]}
            alt={course.title}
            className="course-detail-real-image"
          />
        </div>

        <div className="course-detail-content">
          <span className="detail-badge">{course.level}</span>

          <h1>{course.title}</h1>

          <p className="detail-desc">{course.desc}</p>

          <div className="detail-info">
            <p>
              <strong>Duration:</strong> {course.duration}
            </p>
            <p>
              <strong>Instructor:</strong> {course.instructor}
            </p>
            <p>
              <strong>Category:</strong> {course.category}
            </p>
            <p>
              <strong>Price:</strong> {course.price}
            </p>
          </div>

          <button
            className="detail-enroll-btn"
            onClick={() => navigate("/payment")}
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
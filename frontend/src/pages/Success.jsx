import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>
        <h1>Payment Successful!</h1>
        <p>
          Your course enrollment has been confirmed successfully. You can now
          continue learning and start your journey.
        </p>

        <div className="success-buttons">
          <button onClick={() => navigate("/courses")}>Browse More Courses</button>
          <button
            className="success-home-btn"
            onClick={() => navigate("/")}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
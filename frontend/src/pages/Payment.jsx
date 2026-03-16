import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.cardNumber ||
      !formData.expiry ||
      !formData.cvv
    ) {
      alert("Please fill all payment details.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Payment failed");
        return;
      }

      navigate("/success");
    } catch (error) {
      console.log("Payment error:", error);
      alert("Something went wrong while processing payment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="payment-page">
      <div className="payment-card">
        <div className="payment-top">
          <h2>Complete Your Payment</h2>
          <p>Secure your course access by completing the payment below.</p>
        </div>

        <div className="payment-course-info">
          <h3>Selected Course</h3>
          <div className="payment-course-box">
            <span>Full Stack Web Development</span>
            <strong>₹1999</strong>
          </div>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Card Holder Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            value={formData.cardNumber}
            onChange={handleChange}
          />

          <div className="payment-row">
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              value={formData.expiry}
              onChange={handleChange}
            />

            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              value={formData.cvv}
              onChange={handleChange}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
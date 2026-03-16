const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, cardNumber, expiry, cvv } = req.body;

  if (!name || !cardNumber || !expiry || !cvv) {
    return res.status(400).json({
      message: "Please fill all payment details",
    });
  }

  res.status(200).json({
    message: "Payment successful! Your course enrollment is confirmed.",
  });
});

module.exports = router;
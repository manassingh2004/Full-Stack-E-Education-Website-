const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  res.status(201).json({
    message: "User registered successfully",
    user: {
      name,
      email,
    },
  });
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  res.status(200).json({
    message: "Login successful",
    user: {
      email,
    },
  });
});

module.exports = router;
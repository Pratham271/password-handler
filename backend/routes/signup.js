const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/signup', async (req, res) => {
    let success = false;

  const { username, password } = req.body;

  try {
    // Check password requirements
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message: 'Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and be at least 8 characters long',
      });
    }
    let user = await User.findOne({username: req.body.username});
    if(user){
        return res.status(400).json({success, error:"User already exists"})
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = await User.create({
      username: username,
      password: hashedPassword,
    });

    const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
    success = true;
    res.json({success, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;

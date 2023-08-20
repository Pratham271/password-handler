const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const router = express.Router();

router.post('/login', async(req, res) => {
    let success = false;
  const { username, password } = req.body;
    console.log(req.body)
    console.log(username)
  try {
    let user = await User.findOne({username});
    console.log(user)
    if (!user) {
        // success = false;
      return res.status(400).json({success, message: 'Invalid username or password' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwords match, log in the user
      success = true;
      const token = jwt.sign({ userId: user.id }, 'secret', { expiresIn: '1h' });
      res.json({success, token });
    } else {
        success = false;
      // Passwords don't match
      res.status(400).json({success, message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
});

module.exports = router;

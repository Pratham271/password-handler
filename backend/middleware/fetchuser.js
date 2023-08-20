const jwt = require('jsonwebtoken');

const fetchuser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');

    // Modify this line to set req.user as an object containing the id property
    req.user = decoded.userId ;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = fetchuser;

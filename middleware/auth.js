const jwt = require('jsonwebtoken');
const config = require('config');

//This is a middleare function, which has access to the request/response cycle, 
//next is a callback to run once done, so it moves on to the next piece of middleware

module.exports = function(req, res, next) {
    
// Get token from header
  const token = req.header('x-auth-token');

// Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

// Verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
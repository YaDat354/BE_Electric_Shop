const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  const token = req.header('token');
  try {
    const decode = jwt.verify(token, process.env.JWT_SECRET || 'shopeaseweb');
    console.log('decode: ', decode);
    if (decode) {
      req.user = decode;
      return next();
    } else {
      res.status(401).send('You have to login');
    }
  } catch (error) {
    res.status(401).send('You have to login');
  }
};

module.exports = { authenticate };

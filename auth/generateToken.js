const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

function generateToken(user) {
  const payload = {
    subject: user.id,
    name: user.name,
  };

  const options = {
    expiresIn: '30d'
  };

  return jwt.sign(payload, secrets.jwtSecret, options);
};

module.exports = generateToken;
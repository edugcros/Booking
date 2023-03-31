const jwt = require("jsonwebtoken");


const authService = () => {
  const issue = (payload) => jwt.sign(payload, process.env.PASS_SEC);

  return {
    issue,
  };
};

module.exports = authService;

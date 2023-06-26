require("dotenv").config();
const VerifyToken = (req, res, next) => {
  try {
    const authheader = req.headers["authorization"];
    const jwt = require("jsonwebtoken");
    jwt.verify(authheader, process.env.TOKEN_KEY, (err, user) => {
      if (err) {
        return res.json({ smg: "token invalido" });
      }
      req.userlogeado = user
      next();
    });
  } catch (error) {
    res.json(error);
  }
};


module.exports = VerifyToken;

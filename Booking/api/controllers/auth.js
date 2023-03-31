const authCtrl = {};
const User = require("../models/User.js");
const CryptoJS = require("crypto-js");
const authService = require("../utils/auth.service");

authCtrl.register = async (req, res, next) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      city: req.body.city,
      country: req.body.country,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    const token = authService().issue({ id: user.id });
    user.token = token;

    await user.save();
    return res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error" });
  }
};
authCtrl.login = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Bad Request: Email or password is wrong" });
  }

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json({ msg: "Bad Request: User not found" });
    }
    const bytes = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (originalPassword == req.body.password) {
      const token = authService().issue({ id: user.id });
      user.token = token;

      return res.status(200).json({ user, token });
    }
    return res.status(401).json({ msg: "Unauthorized" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: "Internal server error" });
  }
};
module.exports = authCtrl;

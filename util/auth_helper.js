require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const secret = process.env.SECRET;

const authHelper = {
  formatErrors: (e) => {
    const errors = {};
    const types = Object.keys(e.errors);
    types.forEach((type) => {
      let msg;
      switch (e.errors[type].kind) {
        case "unique":
          msg = `${type} already exists`;
          break;
        case "minlength":
          msg = `${type} must be atleast 3 characters`;
          break;
        default:
          msg = e.message;
          break;
      }
      errors[type] = msg;
    });
    return errors;
  },
  getJWT: (id, handle) => {
    const payload = { id, handle };
    return jwt.sign(payload, secret, (err, token) => {
      console.log(token);
      return err ? null : token;
    });
  },
  comparePasswords: (password, savedPassword) =>
    bcrypt.compare(password, savedPassword),

  hashPassword: (password) => {
    return bcrypt.genSalt((err, salt) => {
      if (err) {
        console.log("error is", err);
      }

      return bcrypt.hash(password, salt, async (error, hashedPassword) => {
        if (error) {
          console.log("error is", error);
        }
        return hashedPassword;
      });
    });
  },
};

module.exports = authHelper;

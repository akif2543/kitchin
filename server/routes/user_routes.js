require("dotenv").config();
const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const User = require("../models/user");
const { userSelect } = require("../util/query_helper");
const { formatErrors } = require("../util/auth_helper");

const secret = process.env.SECRET;

const router = express.Router();

const valid = (text) => Boolean(text.trim().length);

router.get("/:handle", (req, res) => {
  User.findOne(req.params)
    .select(userSelect)
    .then((user) => res.status(200).json(user))
    .catch((e) => res.status(404).json(e));
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!valid(email) || !valid(password))
    return res
      .status(422)
      .json({ error: "You need to enter an email and password" });

  const found = await User.findOne({ email });

  if (found) {
    const match = await bcrypt.compare(password, found.password);

    if (match) {
      const user = found.toJSON();
      delete user.password;
      jwt.sign(user, secret, (err, token) => {
        if (token) {
          res.status(201).json({
            token: `Bearer ${token}`,
          });
        } else {
          res.status(500).json(err);
        }
      });
    } else {
      res.status(400).json({ error: "Invalid email or password" });
    }
  } else {
    res.status(400).json({ error: "Invalid email or password" });
  }
});

router.put(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const profileData = {
      avatar: req.body.avatar,
      location: req.body.location,
      occupation: req.body.occupation,
      bio: req.body.bio,
      cuisine: req.body.cuisine,
      favoriteFood: req.body.favoriteFood,
    };

    User.findByIdAndUpdate(req.user.id, profileData, {
      new: true,
    })
      .then((updated) => {
        const user = updated.toJSON();
        delete user.password;
        jwt.sign(user, secret, (err, token) => {
          if (token) {
            res.status(200).json({
              token: `Bearer ${token}`,
            });
          } else {
            res.status(500).json(err);
          }
        });
      })
      .catch((e) => res.status(404).json(e));
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .select(userSelect)
      .then((user) => res.status(200).json(user))
      .catch((e) => res.status(500).json(e));
  }
);

router.post("/register", async (req, res) => {
  const formData = {
    firstName: req.body["first name"],
    lastName: req.body["last name"],
    handle: req.body.handle,
    email: req.body.email,
  };

  const { password } = req.body;
  const newUser = new User(formData);

  bcrypt.genSalt((err, salt) => {
    if (err) {
      console.log("error is", err);
    }

    bcrypt.hash(password, salt, async (error, hashedPassword) => {
      if (error) {
        console.log("error is", error);
      }
      newUser.password = hashedPassword;

      let savedUser;

      try {
        savedUser = await newUser.save();
      } catch (e) {
        return res.status(400).json(formatErrors(e));
      }

      const user = savedUser.toJSON();
      delete user.password;
      jwt.sign(user, secret, (err, token) => {
        if (token) {
          res.status(201).json({
            token: `Bearer ${token}`,
          });
        } else {
          res.status(500).json(err);
        }
      });
    });
  });
});

router.put(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const userData = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      handle: req.body.handle,
    };

    User.FindByIdAndUpdate(req.user.id, userData, {
      new: true,
      runValidators: true,
      context: "query ",
    })
      .select(userSelect)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((e) => {
        res.status(422).json(e);
      });
  }
);

module.exports = router;

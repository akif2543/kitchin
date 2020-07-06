require("dotenv").config();
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const cors = require("cors");
const apiRoutes = require("./routes/api");
const initPassportStrategy = require("./config/passport");

const app = express();

if (process.env.NODE_ENV !== "production") {
  const morgan = require("morgan");
  app.use(morgan("dev"));
}

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
initPassportStrategy(passport);

const db = process.env.MONGO_URI;
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB is connected.");
  })
  .catch((err) => {
    console.log("error", err);
  });
mongoose.set("useFindAndModify", false);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

app.use("/api", apiRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("You are connected!");
});

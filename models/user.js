const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    handle: {
      type: String,
      required: true,
      minlength: 3,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
      default:
        "https://previews.123rf.com/images/alexwhite/alexwhite1609/alexwhite160904796/62625444-cook-flat-design-yellow-round-web-icon.jpg",
    },
    location: {
      type: String,
      required: true,
      default: "City, Country",
    },
    occupation: {
      type: String,
      default: "What is your job?",
    },
    bio: {
      type: String,
      default: "Tell us a little about yourself.",
    },
    cuisine: {
      type: String,
      default: "What cuisine is your specialty?",
    },
    favoriteFood: {
      type: String,
      default: "What are some of your favorite foods?",
    },
    followers: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
    following: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

UserSchema.plugin(uniqueValidator);

UserSchema.virtual("name").get(function () {
  return `${this.firstName} ${this.lastName}`;
});

const User = mongoose.model("User", UserSchema);
module.exports = User;

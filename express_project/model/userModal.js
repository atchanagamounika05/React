const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: [true, "Email should be unique"],
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);

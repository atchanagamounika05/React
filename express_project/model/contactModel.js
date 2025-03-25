const mongoose = require("mongoose");
const { proppatch } = require("../Routes/ContactRoutes");

const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);

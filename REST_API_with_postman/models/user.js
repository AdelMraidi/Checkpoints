const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  isActive: { type: Boolean, default: false },
});

module.exports = mongoose.model("user", UserSchema);

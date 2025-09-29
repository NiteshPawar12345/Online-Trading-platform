const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // ek hi email bar-bar use na ho
    lowercase: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // password ki minimum length
  }
}, { timestamps: true }); // createdAt, updatedAt auto add ho jayenge

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };

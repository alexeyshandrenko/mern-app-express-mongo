const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  username: { type: String, required: true },
  profilePicture: { type: String },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
  roles: [{ type: String, ref: "Role" }],
});

module.exports = model("User", UserSchema);

const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const PostSchema = new Schema({
  name: { type: String },
  description: { type: String },
  message: { type: String },
  photoUrl: { type: String },
  postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Number },
});

module.exports = model("Post", PostSchema);

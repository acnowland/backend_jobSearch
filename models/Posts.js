const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  jobTitle: {
    type: String,
    required: true,
  },
  jobDescription: String,
  stack: String,
  datePosted: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);

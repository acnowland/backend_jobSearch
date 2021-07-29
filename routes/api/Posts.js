const express = require("express");
const router = express.Router();
const Post = require("../../models/Posts.js");

//Get All Posts
router.get("/", (req, res) => {
  Post.find({}).then((posts) => res.send(posts));
});

// Post
router.post("/", (req, res) => {
  const newPost = new Post({
    jobTitle: req.body.jobTitle,
    jobDescription: req.body.jobDescription,
    stack: req.body.stack,
  });
  Post.create(newPost).then((post) => res.send(post));
});

//Delete

module.exports = router;

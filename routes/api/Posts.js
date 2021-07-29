const express = require("express");
const router = express.Router();
const Post = require("../../models/Posts.js");

//Get All Posts
router.get("/", (req, res) => {
  Post.find({}).then((posts) => res.send(posts));
});

//Get by ID
router.get("/:id", (req, res) => {
  Post.findById(req.params.id).then((post) => res.send(post));
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
router.delete("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((item) => item.remove())
    .then(() => res.send({ message: "Item Removed" }))
    .catch((err) => res.send({ message: "Failed to delete:" + err }));
});

module.exports = router;

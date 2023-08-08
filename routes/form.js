const express = require("express");
const Post = require("../models/Form"); // new
const router = express.Router();

// Get all posts
// router.post("/posts", async (req, res) => {
//   const post = new Post({
//     title: req.body.title,
//     content: req.body.content,
//   });
//   await post.save();
//   res.send(post);
// });

router.get("/posts", async (req, res) => {
  res.send("Hello world");
});
module.exports = router;


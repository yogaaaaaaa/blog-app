const router = require("express").Router();
const User = require("../models/User.js");
const Post = require("../models/Post.js");

//create post
router.post("/", async (req, res) => {
  const post = new Post(req.body);
  try {
    const savePost = await post.save();
    res.status(200).json(savePost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//update post
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      res.status(404).json("there is no post of that id");
    } else if (post.username === req.body.username) {
      try {
        const updatePost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );

        res.status(200).json(updatePost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you only able to update your own post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//delete post
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json("There is no such post");
    } else if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has benn deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get user
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);
  // console.log(user)

  if (!user) {
    res.status(404).json("there is no user with given id");
  } else {
    try {
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;

const router = require("express").Router();
const User = require("../models/User.js");
const Post = require("../models/Post.js");


//create post
router.post("/", async (req, res) => {
    const post = new Post(req.body)
    try{
        const savePost = await post.save();
        res.status(200).json(savePost);
    }catch(err){
        console.log(err)
        res.status(500).json(err)
    }
});

//delete user
router.delete("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404).json("user not found");
  } else if (req.body.userId == req.params.id) {
    try {
      await Post.deleteMany({ username: user.username });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("user succesfully deleted...!");
    } catch {
      res.status(500).json(err);
    }
  }

  // if (req.body.userId == req.params.id) {
  //   try {
  //     const user = await User.findById(req.params.id);
  //     try {
  //       await Post.deleteMany({ username: user.username });
  //       await User.findByIdAndDelete(req.params.id);
  //       res.status(200).json("user succesfully deleted...!");
  //     } catch (err) {
  //       res.status(500).json(err);
  //     }
  //   } catch (err) {
  //     res.status(404).json("user not found");
  //   }
  // }
  else {
    res.status(401).json("you only able to delete your own account!");
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

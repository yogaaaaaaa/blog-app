const router = require("express").Router();
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

//register
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const existUser = await User.findOne({ email: req.body.email });

    if (existUser) {
      return res.status(400).send("user is exist, please login");
    }

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

//login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(400).json("Wrong credentialsss!");

    const validated = await bcrypt.compare(req.body.password, user.password);

    if(!validated){
     return res.status(400).json("Wrong credentials!!!!");
    }
    // !validated &&  res.status(400).json("Wrong credentials!!!!");

    const {password, ...others} = user._doc;
     res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.post("/login", async (req, res) => {
//   try {
//     // Get user input
//     const { username, password } = req.body;

//     // Validate user input
//     if (!(username && password)) {
//       res.status(400).send("All input is required");
//     }
//     // Validate if user exist in our database
//     const user = await User.findOne({ username });

//     if (user && (await bcrypt.compare(password, user.password))) 
//     {
//       // // Create token
//       // const token = jwt.sign(
//       //   { user_id: user._id, email },
//       //   process.env.TOKEN_KEY,
//       //   {
//       //     expiresIn: "1d",
//       //   }
//       // );

//       // // save user token
//       // user.token = token;

//       // user
//       res.status(200).json(user);
//     }
//     res.status(400).send("Invalid Credentials");
//   } catch (err) {
//     console.log(err);
//   }
// });


module.exports = router;

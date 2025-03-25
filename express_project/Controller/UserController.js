const asyncHandler = require("express-async-handler");
const User = require("../model/userModal");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//@desc create user
//@route POST /api/users/register
//access public

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body, "user");
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.findOne({ email });
  if (user) {
    res.status(400);
    throw new Error("User is already registered");
  }

  //hash password
  console.log("password", password);
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  console.log("user created", newUser);
  if (newUser) {
    res.status(201).json({ _id: newUser.id, email: newUser.email });
  } else {
    res.status(400);
    throw new Error("Details are not valid");
  }
  /*   res.json({ message: "register the user" }); */
});

//@desc post login user
//@route POST /api/users/login
//access public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("req.body", req.body);
  if (!email || !password) {
    res.status(400);
    throw new Error("Invalid request");
  }
  const user = await User.findOne({ email });
  console.log("user", user);
  if (user && bcrypt.compare(password, user.password)) {
    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" }
    );
    res.status(200).json({ accessToken });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }

  /*   res.json({ message: "login the user" }); */
});

//@desc get current user
//@route GET /api/users/current
//access private

const currentUser = asyncHandler(async (req, res) => {
  console.log(req.user);
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };

import User from "../models/userModel.js";

// Auth user | POST | Public

const authUser = async (req, res) => {
  res.status(200).json({ message: "Login" });
};

// Register user | POST | Public

const registerUser = async (req, res) => {
  const { firebaseUserId, image } = req.body;
  const user = await User.create({
    firebaseUserId,
    image,
  });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

export { authUser, registerUser };

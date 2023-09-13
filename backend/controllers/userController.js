import User from "../models/userModel.js";

// Auth user | POST | Public

const authUser = async (req, res) => {
  res.status(200).json({ message: "Login" });
};

// Register user | POST | Public

const registerUser = async (req, res) => {
  const { firebaseUserId, image, name } = req.body;
  const user = await User.create({
    firebaseUserId,
    image,
    name,
  });
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(400).json({ message: "Invalid user data" });
  }
};

// Get Single Profile | GET | Private

const getSingleProfile = async (req, res) => {
  const user = await User.findOne({
    firebaseUserId: req.params.id,
  });
  res.status(200).json(user);
};

export { authUser, registerUser, getSingleProfile };

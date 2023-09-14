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

// Update Profile | PUT | Private

const updateProfileName = async (req, res) => {
  const user = await User.findOne({ firebaseUserId: req.user.user_id });

  if (user) {
    user.name = req.body.name || user.name;
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

const updateProfileImage = async (req, res) => {
  const user = await User.findOne({ firebaseUserId: req.user.user_id });

  if (user) {
    user.image = req.body.image || user.image;
    const updatedUser = await user.save();

    res.status(200).json(updatedUser);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

export { authUser, registerUser, getSingleProfile, updateProfileName,updateProfileImage };

// Auth user | POST | Public

const authUser = async (req, res) => {
  res.status(200).json({ message: "Login" });
};

// Register user | POST | Public

const registerUser = async (req, res) => {
  res.status(200).json({ message: "Register User" });
};

export { authUser, registerUser };

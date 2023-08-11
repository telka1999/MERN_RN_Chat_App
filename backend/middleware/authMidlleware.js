import admin from "../config/firebase.js";

const protect = async (req, res, next) => {
  let token;

  token = req.headers.authorization.split(" ")[1];

  if (token) {
    try {
      const decoded = await admin.auth().verifyIdToken(token);
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, invalid token" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};

export { protect };

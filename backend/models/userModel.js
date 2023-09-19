import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    firebaseUserId: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    email: { type: String },
    freindRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    friends: [
      {
        friendId: {
          type: mongoose.ObjectId,
          ref: "User",
        },
      },
    ],
    sentFriendRequests: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;

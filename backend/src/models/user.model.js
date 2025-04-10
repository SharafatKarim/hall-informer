import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters"],
  },
  profilePic: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "user",
  },
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;
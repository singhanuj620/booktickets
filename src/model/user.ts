import mongoose, { Schema, Document } from "mongoose";
import { UserRole } from "@/constant/role";
import { IUser } from "@/tstypes/modeltypes";

const userSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(UserRole),
    default: UserRole.USER,
  },
});

userSchema.set("timestamps", true);

// Create and export the user model
const User = mongoose.model<IUser>("User", userSchema);
export default User;

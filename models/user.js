import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
     type: String, 
     required: true 
    },
  email: { 
    type: String, 
    required: true, 
    unique: true 
},
  password: { 
    type: String, 
    required: true 
},
phoneNumber: {
  type: String,
  unique: false, // or remove unique
  default: null
},

  isVerified: { 
    type: Boolean, 
    default: false 
},
  otp: { 
    type: String 
},
  otpExpires: { 
    type: Date 
},
role: {
    type: String,
    enum: ["general", "admin"], // restrict possible values
    default: "general"          // default role for new signups
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default mongoose.model("User", userSchema);

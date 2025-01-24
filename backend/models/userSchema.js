import mongoose from "mongoose";

const userSchema = new mongoose.userSchema(
  {
    Name: {
      type: string,
      required: true,
    },
    Username: {
      type: string,
      required: true,
      unique: true,
    },
    Email: {
      type: string,
      required: true,
      unique: true,
    },
    Password: {
      type: string,
      required: true,
    },
    followers :{
      type : Array,
      default : []
    },
    following : {
      type : Array,
      default : []
    }
  },
  { Timestamp: true }
);

export default User = mongoose.model("User", userSchema);

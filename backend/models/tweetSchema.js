import mongoose from "mongoose";

const tweetSchema = new mongoose.userSchema(
  {
    description: {
      type: string,
      required: true,
    },
    like: {
      type: Array,
      default :[]
    },
    userID :{
      type : mongoose.Schema.Types.ObjectId,
      ref : "User"
    },
    bookmark: {
      type: Array,
      default :[]
    },
    
  },
  { Timestamp: true }
);

export default Tweet = mongoose.model("Tweet", tweetSchema);

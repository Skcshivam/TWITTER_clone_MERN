import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: {
    tweet: null,
  },
  reducers: {
    getAllTweets: (state, action) => {
      state.tweet = action.payload;
    },
  },
});

export const { getAllTweets } = tweetSlice.actions;
export default tweetSlice.reducer;

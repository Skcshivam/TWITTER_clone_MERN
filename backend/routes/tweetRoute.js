import express from "express";
import {
  createTweet,
  deleteTweet,
  LikeOrDislike,
} from "../controllers/tweetController.js";
import isAuthenticated from "../config/auth.js";

const router = express.Router();

router.route("/create").post(isAuthenticated, createTweet);
router.route("/delete/:id").delete(isAuthenticated, deleteTweet);
router.route("/like/:id").put(isAuthenticated, LikeOrDislike);
router.route("/dislike/:id").put(isAuthenticated, LikeOrDislike);
export default router;

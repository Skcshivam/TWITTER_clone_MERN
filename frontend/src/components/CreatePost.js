import React from "react";
import Avatar from "react-avatar";
import { FaImages } from "react-icons/fa";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineGifBox } from "react-icons/md";
// import img from "./";
// import img from "../Images/8HSTqIlD_400x400";

function CreatePost() {
  return (
    <div className="w-[100%] ">
      <div>
        <div className="flex items-center justify-evenly border-b border-gray-200 ">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg ">For you</h1>
          </div>
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>

        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                className="rounded-full"
                src="https://pbs.twimg.com/profile_images/1874558173962481664/8HSTqIlD_400x400.jpg"
                twitterHandle="sitebase"
                size="40"
              />
            </div>
            <input
              className="w-full outline-none border-none text-xl ml-2"
              type="text"
              placeholder="What is happening?"
            />
          </div>
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div className="flex ">
              <div>
                <FaImages size="24px" />
              </div>
              <div className="ml-4">
                <MdOutlineEmojiEmotions size="24px" />
              </div>
              <div className="ml-4">
                <IoLocationOutline size="24px" />
              </div>
              <div className="ml-4">
                <MdOutlineGifBox size="24px" />
              </div>
            </div>
            <button className="bg-[#1D9BF0] rounded-full border-none px-4 py-1 text-lg text-white text-right">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;

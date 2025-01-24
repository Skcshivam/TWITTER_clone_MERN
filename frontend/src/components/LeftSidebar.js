import React from "react";
import { IoMdHome } from "react-icons/io";
import { FaHashtag } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { FaBookmark } from "react-icons/fa6";
import { RiLogoutCircleRLine } from "react-icons/ri";
import twitter from "../Images/64cebe06bc8437de66e41758_X-EverythingApp-Logo-Black-Twitter.jpg";
import { Link } from "react-router-dom";
function LeftSidebar() {
  return (
    <div className="w-[20%]">
      <div>
        <div>
          <img
            className="ml-4"
            src={twitter}
            width={"34px"}
            alt="twitter-logo"
          />
        </div>
        <div className="my-4">
          <Link
            to="/"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <div>
              <IoMdHome size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Home</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaHashtag size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Explore</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <IoIosNotifications size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Notifications</h1>
          </div>

          <Link
            to="/profile"
            className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer"
          >
            <div>
              <FaRegUserCircle size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Profile</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <FaBookmark size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">BookMarks</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full hover:cursor-pointer">
            <div>
              <RiLogoutCircleRLine size={"24px"} />
            </div>
            <h1 className="font-bold text-lg ml-2">Logout</h1>
          </div>
          <button className="px-4 py-2 border-none text-md bg-[#1D9BF0] w-full rounded-full text-white font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;

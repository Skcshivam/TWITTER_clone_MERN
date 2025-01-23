import React from "react";
import Avatar from "react-avatar";
import { FaRegComment } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";

function Tweet() {
  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4 ">
          <Avatar
            className="rounded-full"
            src="https://pbs.twimg.com/profile_images/1874558173962481664/8HSTqIlD_400x400.jpg"
            twitterHandle="sitebase"
            size="40"
          />
          <div className="ml-2 w-full">
            <div className="flex items-center">
              <h1 className="font-bold">Shivam</h1>
              <p className="text-gray-500 text-sm ml-1">@Shivam123 . 1m</p>
            </div>
            <div>
              <p>Hellow developer lets connenct Together</p>
            </div>
            <div className="flex justify-between my-3">
              <div className="flex items-center">
                <div className="p-2 hover:bg-green-200 cursor-pointer rounded-full">
                  <FaRegComment size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-red-200 cursor-pointer rounded-full">
                  <FaRegHeart size="20px" />
                </div>
                <p>0</p>
              </div>
              <div className="flex items-center">
                <div className="p-2 hover:bg-yellow-200 cursor-pointer rounded-full">
                  <FaRegBookmark size="20px" />
                </div>
                <p>0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

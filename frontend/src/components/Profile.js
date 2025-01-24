import React from "react";
import Bgimg from "./1500x500.jpg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Avatar from "react-avatar";

function Profile() {
  return (
    <div className="w-[50%] border-l border-r border-gray-250">
      <div>
        <div className="flex items-center py-2">
          <Link
            to="/"
            className="p-2 rounded-full hover:bg-gray-100 hover:cursor-pointer"
          >
            <IoMdArrowRoundBack size="24px" />
          </Link>
          <div className="ml-2">
            <h1 className="font-bold text-lg">Shivam</h1>
            <p className="text-gray-500 text-sm">10 Posts</p>
          </div>
        </div>
        <img src={Bgimg} alt="Profile cover photo" />
        <div className="absolute top-44 ml-2 border-4 border-white rounded-full">
          <Avatar
            className="rounded-full"
            src="https://pbs.twimg.com/profile_images/1874558173962481664/8HSTqIlD_400x400.jpg"
            twitterHandle="sitebase"
            size="115"
          />
        </div>
        <div className="text-right m-4">
          <button className="border border-gray-400 rounded-full px-4 py-1 hover:bg-gray-200">
            Edit Profile
          </button>
        </div>

        <div className="m-4">
          <h1 className="font-bold text-xl">Shivam</h1>
          <p>@Shivam123</p>
        </div>
        <div className="m-4 text-sm">
          <p>
            #OneFamilyOneReservation | #BrahminGenes | TEDx speaker | Founder &
            CEO | Content Marketing | Email- thisisanuradhatiwari@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React from "react";
import { FaUserCircle } from "react-icons/fa";


const UserDetails = ({ userDetail }) => {
  console.log("userDetail", userDetail);
  return (
    <div>
      <div className="flex items-center gap-4 border-b-4 border-black py-2">
        <FaUserCircle className="text-5xl" />
        <div>
          <span className="text-gray-800 font-semibold">
            {userDetail?.username}
          </span>
          <br />
          <span className="text-gray-500">{userDetail?.email}</span>
        </div>
      </div>
      <div>
       
      </div>
    </div>
  );
};

export default UserDetails;

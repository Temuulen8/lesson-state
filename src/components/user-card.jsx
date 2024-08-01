import React from "react";
import { FaTrash } from "react-icons/fa";

const UserCard = ({ userImg, firstName, userId }) => {
  return (
    <div className="p-5 flex gap-4 items-cemter border rounded-lg justify-between">
      <img className="w-10 h-10 rounded-full" src={userImg} alt="" />
      <div className="flex justify-end">
        <h1>{firstName}</h1>
      </div>
      <FaTrash onClick={() => deleteUser(userId)} />
    </div>
  );
};

export default UserCard;

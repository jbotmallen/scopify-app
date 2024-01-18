import React from "react";
import { IoColorPalette } from "react-icons/io5";

const Banner = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-50 h-1/4 w-full relative border-y-2 border-gray-700 dark:border-gray-200">
      <img
        src={
          user && user.photoUrl
            ? user.photoUrl
            : "/blankpfp.png"
        }
        alt="avatar"
        className="rounded-full w-16 h-16 md:w-32 md:h-32 absolute -bottom-8 md:-bottom-12 left-[10%] border-4 border-gray-700 dark:border-gray-200"
      />
      <button className="transition-all duration-300 hover:-translate-y-[1px] absolute z-20 bottom-5 right-10 bg-gray-50 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 px-2 py-1 text-gray-800 dark:text-gray-200 border border-gray-900 dark:border-gray-200 border-opacity-40 rounded-md flex items-center gap-1">
        <IoColorPalette size={20} />
      </button>
    </div>
  );
};

export default Banner;

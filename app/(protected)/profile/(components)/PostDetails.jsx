import React from "react";

import { IoIosImage } from "react-icons/io";
import { FaUsers } from "react-icons/fa6";
import { EyeIcon, Pen } from "lucide-react";
import Link from "next/link";

const PostDetails = () => {
  return (
    <section className="h-full w-1/4 bg-gray-100 rounded-lg shadow shadow-gray-950 dark:shadow-gray-400 dark:bg-gray-900 flex flex-col justify-between p-3 mt-14">
      <span className="tracking-wide text-lg font-semibold h-2/5 flex flex-col justify-around p-2">
        <h1 className="text-xl font-bold text-center h-1/6">Details</h1>
        <span className="flex flex-col justify-around w-full h-1/3 items-start mx-auto">
          <h2 className="text-xs md:text-sm tracking-wide text-red-400 flex items-center gap-1">
            <IoIosImage />
            32 Total Posts
          </h2>
          <h2 className="text-xs md:text-sm tracking-wide text-blue-500 flex items-center gap-1">
            <FaUsers />
            556 Total Followers
          </h2>
        </span>
        <Link
          href="/posts"
          className="h-1/4 p-1 w-full flex items-center gap-2 justify-center text-sm transition-all duration-300 bg-transparent dark:hover:bg-purple-300 hover:bg-purple-600 hover:text-gray-200 dark:hover:text-gray-900 rounded-lg"
        >
          <Pen size={12} /> More details...
        </Link>
      </span>
      <ul className="flex flex-col justify-evenly h-3/5">
        <li className="text-sm font-mono font-normal flex flex-col justify-evenly w-full h-1/4 border-y border-gray-800 dark:border-white border-opacity-60">
          <Link
            href="#"
            className="hover:text-indigo-500 flex items-center gap-1"
          >
            Today
          </Link>
          <span className="w-full flex justify-between text-xs items-center">
            <h2 className="text-red-400">2 Posts</h2>
            <h2 className="text-blue-500">3 Followers</h2>
          </span>
        </li>
        <li className="text-sm font-mono font-normal flex flex-col justify-evenly w-full h-1/4 border-b border-gray-800 dark:border-white border-opacity-60">
          <Link href="/" className="hover:text-indigo-500">
            1 week ago
          </Link>
          <span className="w-full flex justify-between text-xs items-center">
            <h2 className="text-red-400">4 Posts</h2>
            <h2 className="text-blue-500">8 Followers</h2>
          </span>
        </li>
        <li className="text-sm font-mono font-normal flex flex-col justify-evenly w-full h-1/4 border-b border-gray-800 dark:border-white border-opacity-60">
          <Link href="#" className="hover:text-indigo-500">
            1 month ago
          </Link>
          <span className="w-full flex justify-between text-xs items-center">
            <h2 className="text-red-400">7 Posts</h2>
            <h2 className="text-blue-500">23 Followers</h2>
          </span>
        </li>
        <li className="text-sm font-mono font-normal flex flex-col justify-evenly w-full h-1/4 border-t border-gray-800 dark:border-white border-opacity-60">
          <a href="#" className="hover:text-indigo-500">
            1 year ago
          </a>
          <span className="w-full flex justify-between text-xs items-center">
            <h2 className="text-red-400">20 Posts</h2>
            <h2 className="text-blue-500">332 Followers</h2>
          </span>
        </li>
      </ul>
    </section>
  );
};

export default PostDetails;

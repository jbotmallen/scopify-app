"use client";

import React, { useMemo } from "react";
import { UseAuth } from "../../../lib/context/AuthContext.js";
import PostDetails from "./(components)/PostDetails.jsx";
import Banner from "./(components)/Banner.jsx";
import Posts from "./(components)/Posts.jsx";
import { Plus } from "lucide-react";
import Link from "next/link.js";

const page = () => {
  const { user } = UseAuth();

  const userDetails = useMemo(() => {
    if (user) {
      return {
        name: user.reloadUserInfo.displayName
          ? user.reloadUserInfo.displayName
          : user.email.split("@")[0],
        email: user?.reloadUserInfo.email,
        photoUrl: user?.reloadUserInfo.photoUrl,
      };
    }
  }, [user]);

  console.log(userDetails);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between bg-transparent">
      <Banner
        image={
          userDetails && userDetails.photoUrl
            ? userDetails.photoUrl
            : "/blankpfp.png"
        }
      />
      <div className="w-full h-3/4 px-24 flex items-center justify-between gap-5 py-8">
        <section className="h-full w-2/3 flex flex-col gap-5 py-8">
          <span className="w-full h-1/6 flex justify-between">
            <div>
              <h1 className="text-xl font-mono font-semibold text-left">
                {userDetails && userDetails.name}
              </h1>
              <h2 className="text-dm font-mono font-thin text-left italic">
                {userDetails && userDetails.email}
              </h2>
            </div>
            <Link
              href="/posts/add"
              className="transition-all ease-in-out duration-300 rounded-lg flex justify-center items-center gap-1 bg-green-300 dark:bg-green-500 px-3 py-1 dark:text-gray-200 text-gray-900 hover:bg-green-500 hover:text-gray-200 hover:scale-105 hover:dark:bg-green-300 hover:dark:text-gray-900 border-2 border-green-300 dark:border-green-500"
            >
              <Plus size={14} className="block md:hidden" />
              <span className="hidden md:block">New Post</span>
            </Link>
          </span>
          <Posts />
        </section>
        <PostDetails />
      </div>
    </div>
  );
};

export default (page);
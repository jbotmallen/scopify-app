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
              href="/create"
              className="h-4/5 text-sm transition-all ease-in-out duration-300 rounded-lg flex justify-center items-center gap-1 bg-green-300 dark:bg-green-500 px-3 dark:text-gray-200 text-gray-900 hover:bg-green-500 hover:text-gray-200 hover:scale-[1.03] hover:dark:bg-green-300 hover:dark:text-gray-900"
            >
              <Plus size={14} />
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

export default page;

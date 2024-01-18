"use client";

import React, { useEffect, useMemo, useCallback } from "react";
import { UseAuth } from "../../lib/context/AuthContext.js";
import { SyncLoader } from "react-spinners";
import PostDetails from "./(components)/PostDetails.jsx";
import Banner from "./(components)/Banner.jsx";
import Posts from "./(components)/Posts.jsx";
import { useRouter } from "next/navigation.js";

const page = () => {
  const { loading, user } = UseAuth();
  const router = useRouter();

  if (loading && !user) {
    return (
      <div className="w-20 h-20 flex flex-col items-center justify-center gap-3">
        <h1 className="text-2xl font-mono font-semibold">Loading...</h1>
        <SyncLoader color="#36d7b7" className=" -ml-5" />
      </div>
    );
  }

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

  const redirectToLoginPage = useCallback(() => {
    if (!user) {
      router.push("/auth/sign-in");
    }
  }, [user]);

  useEffect(() => {
    redirectToLoginPage();
  }, [redirectToLoginPage]);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-between bg-transparent">
      <Banner user={userDetails} />
      <div className="w-full h-3/4 px-24 flex items-center justify-between gap-5 py-8">
        <section className="h-full w-2/3 flex flex-col gap-5 py-8">
          <span className="w-full h-1/6">
            <h1 className="text-xl font-mono font-semibold text-left">
              {userDetails && userDetails.name}
            </h1>
            <h2 className="text-dm font-mono font-thin text-left italic">
              {userDetails && userDetails.email}
            </h2>
          </span>
          <Posts />
        </section>
        <PostDetails />
      </div>
    </div>
  );
};

export default page;

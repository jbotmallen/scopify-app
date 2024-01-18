import Link from "next/link";
import React from "react";
import { UseAuth } from "../../lib/context/AuthContext.js";
import BarLoader from "react-spinners/BarLoader.js";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const { user, Logout, loading } = UseAuth();

  const handeSignOut = async () => {
    try {
      await Logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-16 w-4/5 flex items-center justify-between p-3 bg-transparent mx-auto">
      <ul className="w-1/4 h-full flex items-center justify-start gap-5">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        {loading ? (
          <BarLoader color="#36d7b7" width={32} height={4} className="px-5" />
        ) : (
          user && (
            <li>
              <Link href="/profile">Profile</Link>
            </li>
          )
        )}
      </ul>

      {loading ? (
        <BarLoader color="#36d7b7" width={32} height={4} className="mr-10" />
      ) : !user ? (
        <ul className="w-1/4 h-full flex items-center justify-end gap-5">
          <li>
            <Link href="/auth/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/auth/sign-up">Sign-Up</Link>
          </li>
        </ul>
      ) : (
        <div className="h-full w-1/5 flex items-center justify-end gap-5">
          <Popover>
            <PopoverTrigger>
              <div className="flex items-center justify-center gap-2">
                <img
                  src={
                    user.reloadUserInfo.photoUrl
                      ? user.reloadUserInfo.photoUrl
                      : "/blankpfp.png"
                  }
                  alt="Profile Picture"
                  className="h-10 w-10 rounded-full"
                />
                <section className="h-full flex flex-col items-start justify-start">
                  <h1 className="text-sm text-left max-w-20 text-ellipsis overflow-hidden whitespace-nowrap">
                    {user.displayName ? user.displayName.split(" ").slice(0, 2).join(" ") : user.email.split("a")[0]}
                  </h1>
                  <h1 className="text-xs max-w-20 italic text-left text-ellipsis overflow-hidden whitespace-nowrap">
                    {user.email}
                  </h1>
                </section>
              </div>
            </PopoverTrigger>
            <PopoverContent className="w-40 h-auto text-xs flex flex-col">
              <Link href="/profile" className="p-1">
                Manage Account
              </Link>
              <a
                className="p-1 text-red-400 cursor-pointer"
                onClick={handeSignOut}
              >
                SignOut
              </a>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </div>
  );
};

export default Navbar;
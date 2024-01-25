import React from "react";
import { SyncLoader } from "react-spinners";
import BarLoader from "react-spinners/BarLoader.js";
import { cn } from "@/lib/utils";

export const LoadingDots = ({ className, text, size }) => {
  return (
    <div
      className={cn(
        className,
        "w-20 h-20 flex flex-col items-center justify-center gap-3"
      )}
    >
      <h1 className="text-2xl font-mono font-semibold">{text}</h1>
      <SyncLoader color="#36d7b7" className=" -ml-5" size={size} />
    </div>
  );
};

export const LoadingBar = ({ className, text, size }) => {
  return (
    <div className={cn(className, "mr-10")}>
      <BarLoader color="#36d7b7" width={size} height={6} />
      <h1 className="text-h2-responsive">{text}</h1>
    </div>
  );
};

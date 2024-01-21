import React from "react";
import { SyncLoader } from "react-spinners";
import BarLoader from "react-spinners/BarLoader.js";

export const LoadingDots = () => {
  return (
    <div className="w-20 h-20 flex flex-col items-center justify-center gap-3">
      <h1 className="text-2xl font-mono font-semibold">Loading...</h1>
      <SyncLoader color="#36d7b7" className=" -ml-5" />
    </div>
  );
};

export const LoadingBar = () => {
  return <BarLoader color="#36d7b7" width={48} height={4} className="mr-10" />;
};

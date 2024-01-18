import React from "react";

const Card = () => {
  return (
    <div className="transition-all duration-300 cursor-pointer w-full h-full max-h-96 flex flex-col justify-between items-center bg-gray-50 hover:bg-gray-200 text-gray-800 dark:bg-gray-900 dark:hover:bg-gray-950 dark:text-gray-200 shadow-sm shadow-gray-800 dark:shadow-gray-200 rounded-lg hover:scale-[1.01]">
      <img
        src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Post Image"
        loading="lazy"
        className="w-full h-3/4 rounded-t-lg object-cover object-center"
      />
      <span className="text-left w-full h-1/4 px-3 py-2 rounded-b-lg">
        <h1 className="font-bold text-xl h-1/2">Title of the post</h1>
        <span className="w-full h-1/2 flex items-center justify-between">
          <h2 className="text-xs italic max-w-4/5 text-ellipsis whitespace-nowrap overflow-hidden">Description of the post</h2>
          <a className="text-xs italic cursor-pointer text-blue-500 hover:text-blue-700">#Tags</a>
        </span>
      </span>
    </div>
  );
};

export default Card;

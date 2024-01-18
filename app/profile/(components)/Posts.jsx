import React from "react";
import Card from "./Card";
import { render } from "react-dom";

const Posts = () => {
  let cardCount = 5;

  return (
    <div className="w-full min-h-72 h-auto rounded-md flex flex-col gap-5">
      <h1 className="tracking-widest font-bold">Recent Posts</h1>
      {Array(cardCount)
        .fill()
        .map((_, idx) => (
          <Card key={idx} />
        ))}
    </div>
  );
};

export default Posts;

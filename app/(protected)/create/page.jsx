"use client";
import { Button } from "@/components/ui/button";
import { UseAuth } from "@/lib/context/AuthContext";
import { createPost } from "@/lib/firebase/routes/api/posts";
import { createAffiliates } from "@/lib/firebase/routes/api/users";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { v4 } from "uuid";

const page = () => {
  const { user } = UseAuth();
  const [testPost, setPost] = useState({
    id: v4(),
    title: "Test Post",
    description: "This is a test post",
    link: "https://www.google.com",
    image:
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
    tags: "test",
    collection: v4(),
  });
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    await createPost(testPost);
    await createAffiliates(
      testPost.id,
      testPost.collection,
      user.reloadUserInfo
    );
    alert("Post Created!");
    router.refresh();
  };

  return (
    <div>
      Add Post Page
      <Button variant="default" size="lg" onClick={handleClick}>
        Click Me
      </Button>
    </div>
  );
};

export default page;

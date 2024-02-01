"use client";
import { ComboboxDemo } from "@/components/ComboBox";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useAlert } from "@/lib/context/AlertContext";
import { UseAuth } from "@/lib/context/AuthContext";
import { createPost } from "@/lib/firebase/routes/api/posts";
import { createAffiliates } from "@/lib/firebase/routes/api/users";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";

const page = () => {
  const { user } = UseAuth();
  const { setAlert } = useAlert();

  const [post, setPost] = useState({
    id: "",
    title: "",
    description: "",
    link: "",
    image: null,
    tags: [],
  });
  const [tags, setTags] = useState("");
  const [collection, setCollection] = useState("");

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();

    setPost({ ...post, id: v4() });

    await createPost(post);
    await createAffiliates(post.id, post.collection, user.reloadUserInfo);

    setAlert("Post created successfully!");
    setTimeout(() => {
      router.refresh();
    }, 3000);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPost({ ...post, image: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleTagSearch = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (post.image) {
      setAlert("Image uploaded successfully!");
    }
  }, [post.image]);

  return (
    <form
      className="h-full w-5/6 flex flex-col lg:flex-row items-center justify-evenly gap-1.5"
      onSubmit={(e) => handleClick(e)}
    >
      <div className="flex flex-col w-5/6 lg:w-1/3 h-1/3 lg:h-full justify-center items-center gap-1.5">
        <div className="w-full h-auto flex flex-col gap-1.5">
          <div className="relative flex w-full justify-between items-center">
            <Label htmlFor="picture" className="lg:text-xl">Picture</Label>
            <XIcon
              onClick={(e) => setPost({ ...post, image: null })}
              size={14}
              className={`${post.image ? "block" : "hidden"}`}
            />
          </div>
          <Input
            onChange={(e) => handleFileChange(e)}
            id="picture"
            type="file"
            className="w-full lg:text-lg"
          />
        </div>
        <div className="w-full h-2/3 bg-gray-900 bg-opacity-30">
          <img
            src={post.image ? post.image : "/blankpfp.png"}
            alt="post image"
            className="w-full h-full object-cover object-center rounded-md opacity-40"
          />
        </div>
        <Button type="submit" variant="authentication" className="w-full lg:text-base">
          Upload Post
        </Button>
      </div>
      <div className="h-3/5 lg:h-full w-full lg:w-3/5 flex flex-col items-center justify-evenly overflow-y-auto">
        <div className="flex flex-col w-5/6 h-1/6 justify-center items-start gap-1.5">
          <Label htmlFor="title" className="lg:text-lg">Title</Label>
          <Input
            id="title"
            type="text"
            placeholder="Enter title..."
            className="w-full h-3/5 lg:text-base"
            onChange={(e) => setPost({ ...post, title: e.target.value })}
            value={post.title}
            required
          />
        </div>
        <div className="flex flex-col w-5/6 h-2/5 justify-center items-start gap-1.5">
          <Label htmlFor="description" className="lg:text-lg">Description</Label>
          <Textarea
            placeholder="Type your post description here."
            className="w-full h-2/3 lg:text-base"
            onChange={(e) => setPost({ ...post, description: e.target.value })}
            value={post.description}
            required
          />
        </div>
        <div className="flex flex-col w-5/6 h-1/6 justify-center items-start gap-1.5">
          <Label htmlFor="link" className="lg:text-lg">Link</Label>
          <Input
            id="link"
            type="text"
            placeholder="Enter a link..."
            className="w-full h-3/5 lg:text-base"
            onChange={(e) => setPost({ ...post, link: e.target.value })}
            value={post.link}
          />
        </div>
        <div className="flex flex-col w-5/6 h-1/6 justify-center items-start gap-1.5">
          <Label htmlFor="collection" className="lg:text-lg">Collection</Label>
          <ComboboxDemo input={collection} setInput={setCollection} />
        </div>
        <div className="flex flex-col w-5/6 h-1/6 justify-center items-start gap-1.5">
          <Label htmlFor="tags" className="lg:text-lg">Tags</Label>
          <Input
            id="tag"
            type="text"
            placeholder="Search for a tag..."
            className="w-full h-3/5 lg:text-base"
            onChange={(e) => {
              setTags(e.target.value);
              handleTagSearch(e);
            }}
            value={tags}
          />
        </div>
      </div>
    </form>
  );
};

export default page;

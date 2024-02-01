import { setDoc } from "firebase/firestore";
import { createReference } from "../reference";

export async function createPost(post) {
  const docRef = createReference("posts", post.id);
  
  await setDoc(docRef, {
    createdAt: new Date().toISOString(),
    postId: post.id,
    postTitle: post.title,
    postDescription: post.description,
    postLink: post.link,
    postImage: post.image,
    postTags: post.tags,
    postCollection: post.collection,
  });
}

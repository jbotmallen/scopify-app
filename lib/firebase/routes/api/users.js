import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";

export async function createAffiliates(postId, postCollection, user) {
 const docRef = doc(db, "user_affiliations", user.email);
 const docSnap = await getDoc(docRef);

 if(!docSnap.exists()) {
    await setDoc(docRef, {
       posts: [postId],
       collections: [postCollection],
    });

    return;
 }

 let posts = [];
 let collections = [];

 if (docSnap.exists()) {
    posts = docSnap.get('posts') || [];
    collections = docSnap.get('collections') || [];
 }

 posts = Array.from(new Set([...posts, postId]));
 collections = Array.from(new Set([...collections, postCollection]));

 await updateDoc(docRef, {
    posts: posts,
    collections: collections
 });
}

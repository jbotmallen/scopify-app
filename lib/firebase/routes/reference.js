import { doc } from "firebase/firestore";
import { db } from "../firebase";

export const createReference = async (table, refer) => {
  const ref = doc(db, table, refer);
  return ref;
};

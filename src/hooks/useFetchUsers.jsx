import {
  query,
  onSnapshot,
  collection,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { useState, useEffect } from "react";
import { dbFireStore } from "@/firebase/config";
import { useRouter } from "next/router";

export default function useFetchUsers() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    const docRef = collection(dbFireStore, "users");
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });
      const filteredUserData = data.map((obj) => {
        const { password, userRole, ...rest } = obj;
        return rest;
      });
      setAllUsers(
        filteredUserData.filter((user) => user?.email !== "admin@gmail.com")
      );
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);

  return { allUsers };
}

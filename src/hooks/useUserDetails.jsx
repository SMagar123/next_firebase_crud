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

export default function useUserDetails() {
  const router = useRouter();
  const userId = router.query?.userId;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    if (userId) {
      const docRef = collection(dbFireStore, "features");
      const queryRef = query(docRef, where("userId", "==", userId));

      const unsubscribe = onSnapshot(queryRef, (querySnapshot) => {
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ docId: doc.id, ...doc.data() });
        });
        setUserData(data);
      });

      return () => {
        // Unsubscribe when the component unmounts
        unsubscribe();
      };
    }
  }, [userId]);

  return { userData };
}

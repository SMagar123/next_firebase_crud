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

export default function useFetchUserRole() {
  const router = useRouter();
  const userId = router.query?.userId;
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const userQuery = query(
      userRef,
      where("userId", "==", userId),
      where("password", "==", data.password)
    );
    const querySnapshot = getDocs(userQuery);
    const result = querySnapshot.docs.map((d) => {
      return d.data();
    });
    const docRef = collection(dbFireStore, "features");
    const unsubscribe = onSnapshot(docRef, (querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        data.push({ docId: doc.id, ...doc.data() });
      });
      setAllData(data);
    });

    return () => {
      // Unsubscribe when the component unmounts
      unsubscribe();
    };
  }, []);

  return { allData };
}

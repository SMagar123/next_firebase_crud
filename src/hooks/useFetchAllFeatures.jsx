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

export default function useFetchAllFeatures() {
  //   const router = useRouter();
  const [allData, setAllData] = useState([]);

  useEffect(() => {
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

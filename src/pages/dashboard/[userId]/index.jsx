import React from "react";
import Navbar from "@/components/organisms/Navbar";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import { IoMdAddCircle } from "react-icons/io";
import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import { dbFireStore } from "@/firebase/config";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import { useEffect } from "react";
import UserDataTable from "@/components/organisms/Table";
import useUserDetails from "@/hooks/useUserDetails";

const UserDashboard = () => {
  const router = useRouter();
  const userId = router.query?.userId;
  const { userData } = useUserDetails();
  const addRecord = () => {
    router.push(`/dashboard/${userId}/addrequest`);
  };
  console.log("user id:::", userId);
  console.log("user details:::", userData);
 

  return (
    <>
      <Navbar />
      <SectionContainer className="mt-3">
        <Container>
          <GridContainer>
            <button
              className="btn col-span-2 col-start-11 btn-primary"
              // onClick={() => document.getElementById("my_modal_3").showModal()}
              onClick={addRecord}
            >
              Add Request
              <IoMdAddCircle fontSize="large" />
            </button>
            <UserDataTable userData={userData} />
            {/* <UserDataTable /> */}
            <ToastContainer />
          </GridContainer>
        </Container>
      </SectionContainer>
    </>
  );
};

export default UserDashboard;

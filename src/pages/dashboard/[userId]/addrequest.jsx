import React from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import { dbFireStore } from "@/firebase/config";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  where,
  query,
  getDocs,
} from "firebase/firestore";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import Navbar from "@/components/organisms/Navbar";
import { useRouter } from "next/router";

const AddRequest = () => {
  const router = useRouter();
  const userId = router.query?.userId;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      featureName: "",
      description: "",
      status: "new",
      proposedAmount: 0,
      counterAmount: 0,
      approvedAmount: 0,
      approved: "pending",
    },
  });
  const addRecord = async (data, e) => {
    e.preventDefault();
    try {
      const docRef = doc(collection(dbFireStore, "features"));
      const newFeatureRequest = { ...data, userId: userId };
      await setDoc(docRef, newFeatureRequest);
      toast.success("🦄 Feature request added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
      router.push(`/dashboard/${userId}`);
    } catch (e) {
      console.log("error while adding the records", e);
      toast.error("Unable to add new record", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <>
      <Navbar />
      <SectionContainer>
        <Container>
          <GridContainer>
            <div className="col-span-4 lg:col-span-6 lg:col-start-4">
              <h3 className="font-bold mb-3 text-center">
                Add Required Feature
              </h3>
              <form
                onSubmit={handleSubmit(addRecord)}
                className="flex flex-col gap-2"
              >
                <label htmlFor="Feature">Feature</label>
                <input
                  type="text"
                  name="featureName"
                  {...register("featureName", {
                    required: "Feature name is required",
                  })}
                  placeholder="Enter Feature"
                  className="py-2 px-3 outline-none border border-gray-400"
                />
                <p className="text-red-600">{errors.featureName?.message}</p>
                <label htmlFor="Description">Description</label>
                <textarea
                  name="description"
                  {...register("description", {
                    required: "Description is required",
                  })}
                  placeholder="Enter Description"
                  className="py-2 px-3 outline-none border border-gray-400"
                />
                <p className="text-red-600">{errors.description?.message}</p>
                <input
                  type="submit"
                  value="Submit"
                  className="border bg-blue-700 cursor-pointer hover:bg-blue-800 transition duration-300 text-white py-2 px-4"
                />
              </form>
            </div>
          </GridContainer>
        </Container>
        <ToastContainer />
      </SectionContainer>
    </>
  );
};

export default AddRequest;

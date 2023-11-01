import React, { useMemo, useState } from "react";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  where,
  query,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { dbFireStore } from "@/firebase/config";
import "react-toastify/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";

const FeatureDetails = ({ feature, updatedRecord, update, userRole }) => {
  const featureDetail = useMemo(() => feature, [feature]);
  const details = Object.entries(featureDetail).map(([key, value]) => ({
    key,
    value,
  }));

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  //update the approval status of the payment deal
  const handleApproval = async () => {
    try {
      const docId = featureDetail?.docId; // Assuming featureDetail contains the valid docId
      if (docId) {
        const docRef = doc(dbFireStore, "features", docId);
        await updateDoc(docRef, {
          ...feature,
          approved: "approved",
          status: "on process",
        });
        reset(); // Assuming reset is a function to reset the form
        toast.success("🦄 Payment deal done ", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updatedRecord(!update);
      } else {
        console.log("Invalid document ID!");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  const updateRecord = async (data, e) => {
    e.preventDefault();
    try {
      const docId = featureDetail?.docId; // Assuming featureDetail contains the valid docId
      if (docId) {
        const docRef = doc(dbFireStore, "features", docId);
        await updateDoc(docRef, { ...feature, ...data });
        reset(); // Assuming reset is a function to reset the form
        toast.success("🦄 Counter amount updated", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        updatedRecord(!update);
      } else {
        console.log("Invalid document ID!");
      }
    } catch (error) {
      console.error("Error updating document: ", error);
    }
  };

  return (
    <SectionContainer>
      <Container>
        <GridContainer>
          <div className="col-span-full">
            <h2 className="font-bold mb-3 text-center text-3xl border-b-2">
              Payment Negotiate
            </h2>
            {details
              .filter((item) => item.key !== "docId" && item.key !== "userId")
              .map((item) => {
                return (
                  <div
                    key={item.key}
                    className="border-b-2 flex gap-5 justify-between py-4 flex-wrap"
                  >
                    <h3 className="text-lg font-semibold">
                      {item?.key?.toUpperCase()}
                    </h3>
                    <p className="text-right font-medium">{item?.value}</p>
                  </div>
                );
              })}
            <form
              onSubmit={handleSubmit(updateRecord)}
              className="flex flex-col gap-2 py-4"
            >
              <label htmlFor="Counter Amount" className="text-lg font-semibold">
                RENEGOTIATE AMOUNT
              </label>
              {userRole === "admin" ? (
                <>
                  <input
                    type="number"
                    name="proposedAmount"
                    {...register("proposedAmount", {
                      required: "Proposed Amount is required",
                    })}
                    placeholder="Enter Proposed Amount"
                    disabled={
                      featureDetail?.approved === "approved" ? true : false
                    }
                    className="py-2 px-3 outline-none border border-gray-400"
                  />

                  <p className="text-red-600">
                    {errors.proposedAmount?.message}
                  </p>
                </>
              ) : (
                <>
                  <input
                    type="number"
                    name="counterAmount"
                    {...register("counterAmount", {
                      required: "Counter Amount is required",
                    })}
                    placeholder="Enter Counter Amount"
                    disabled={
                      featureDetail?.approved === "approved" ||
                      featureDetail?.proposedAmount === 0
                        ? true
                        : false
                    }
                    className="py-2 px-3 outline-none border border-gray-400"
                  />
                  <p className="text-red-600">
                    {errors.counterAmount?.message}
                  </p>
                </>
              )}

              <button
                type="submit"
                name="negotiate"
                disabled={featureDetail?.approved === "approved" ? true : false}
                className="border bg-red-700 cursor-pointer hover:bg-red-800 transition duration-300 text-white py-2 px-4"
              >
                Negotiate
              </button>
            </form>
            <button
              onClick={handleApproval}
              name="approve"
              disabled={
                featureDetail?.approved === "approved" ||
                featureDetail?.proposedAmount === 0
                  ? true
                  : false
              }
              className="w-full border bg-blue-700 cursor-pointer hover:bg-blue-800 transition duration-300 text-white py-2 px-4"
            >
              Approve
            </button>
            <ToastContainer />
          </div>
        </GridContainer>
      </Container>
    </SectionContainer>
  );
};

export default FeatureDetails;

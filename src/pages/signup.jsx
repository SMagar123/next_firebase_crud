import { useState } from "react";
import { useForm } from "react-hook-form";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import { dbFireStore } from "@/firebase/config";
import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import Link from "next/link";

const SignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = async (data, e) => {
    e.preventDefault();
    try {
      const userDocument = doc(collection(dbFireStore, "users"));
      const userInfo = { ...data, userId: userDocument.id, userRole: "client" };
      await setDoc(userDocument, userInfo);
      toast.success("🦄 Account Created successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.replace("/");
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <SectionContainer className="">
      <Container className="">
        <GridContainer className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-full shadow-lg rounded-md flex flex-col gap-2 lg:col-span-6 lg:col-start-4 py-4 px-5"
          >
            <h1 className="text-3xl font-semibold text-center border-b-4">
              Sign Up
            </h1>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "email required",
              })}
              placeholder="Enter email"
              className="py-2 px-3 outline-none border border-gray-400"
            />
            <p className="text-red-600">{errors.email?.message}</p>
            <label>Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              id="username"
              placeholder="Enter username"
              className="py-2 px-3 outline-none border border-gray-400"
            />
            <p className="text-red-600">{errors.username?.message}</p>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "min length 8 is required for password",
                },
              })}
              id="password"
              placeholder="Enter password"
              className="py-2 px-3 outline-none border border-gray-400"
            />
            <p className="text-red-600">{errors.password?.message}</p>
            <input
              type="submit"
              value="Register"
              className="btn border bg-gray-600 cursor-pointer hover:bg-gray-700 transition duration-300 text-white py-2 px-4"
            />
            <div id="signup" className="flex gap-4">
              <p>Have an account ?</p>
              <Link href="/" className="text-gray-700 font-bold">
                Login Instead
              </Link>
            </div>
          </form>

          <ToastContainer />
        </GridContainer>
      </Container>
    </SectionContainer>
  );
};

export default SignUp;

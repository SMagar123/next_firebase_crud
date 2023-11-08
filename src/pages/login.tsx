import React from "react";
import { useForm } from "react-hook-form";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
import { dbFireStore, userAuth } from "@/firebase/config";
import "react-toastify/ReactToastify.min.css";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setCookie, parseCookies } from "nookies";
// import { authenticate } from "@/utils/Auth";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();
  const userRef = collection(dbFireStore, "users");
  const onSubmit = async (data: FormData) => {
    try {
      const userDetail = await signInWithEmailAndPassword(
        userAuth,
        data.email,
        data.password
      );
      console.log("login :::", userDetail);
      if (userDetail.user) {
        const token = await userDetail.user.getIdToken();
        setCookie(null, "accessToken", token);
        // const browserCookie = parseCookies()?.accessToken;
      }
      // authenticate(parseCookies()?.acessToken);

      const userQuery = query(
        userRef,
        where("email", "==", userDetail?.user?.email),
        where("userId", "==", userDetail?.user?.uid)
      );
      const querySnapshot = await getDocs(userQuery);
      const result = querySnapshot.docs.map((d) => {
        return d.data();
      });
      console.log("user data from user collection:::", result);
      if (result.length !== 0 && result[0].userRole === "client") {
        toast.success("🦄 Login successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.replace(`/dashboard/${result[0].userId}`);
      } else if (result.length !== 0 && result[0].userRole === "admin") {
        toast.success("🦄 Logged as admin ", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.replace(`/admin`);
      }
    } catch (e) {
      console.log("error while login", e);
      toast.error(`Invalid login credentials`, {
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
              Log In
            </h1>
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              id="email"
              placeholder="Enter email"
              className="py-2 px-3 outline-none border border-gray-400"
            />
            <p className="text-red-600">{errors.email?.message}</p>
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
              value="Login"
              className="btn border bg-gray-600 cursor-pointer hover:bg-gray-700 transition duration-300 text-white py-2 px-4"
            />
            <div id="signup" className="flex gap-4">
              <p>Have an account ?</p>
              <Link href="/signup" className="text-gray-700 font-bold">
                Create One
              </Link>
            </div>
          </form>
          <ToastContainer />
        </GridContainer>
      </Container>
    </SectionContainer>
  );
};

export default Login;

import React from "react";
import { useForm } from "react-hook-form";
import SectionContainer from "@/components/containers/SectionContainer";
import Container from "@/components/containers/Container";
import GridContainer from "@/components/containers/GridContainer";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <SectionContainer className="">
      <Container className="">
        <GridContainer className="">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="col-span-full shadow-lg flex flex-col gap-2 lg:col-span-6 lg:col-start-4 py-4 px-5"
          >
            <h1 className="text-3xl font-semibold">Log In</h1>
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
              value="Submit"
              className="border bg-green-600 cursor-pointer hover:bg-green-700 transition duration-300 text-white py-2 px-4"
            />
          </form>
        </GridContainer>
      </Container>
    </SectionContainer>
  );
};

export default Login;

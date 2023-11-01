import React from "react";
import { useForm } from "react-hook-form";
const InputField = ({ type = "text", name }) => {
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <>
      <label htmlFor={`${name}`}>{name?.toUpperCase()}</label>
      <input
        type={type}
        name={name}
        {...register(`${name}`, {
          required: `${name} is required`,
        })}
        value={feature?.status}
        disabled
        className="py-2 px-3 outline-none border border-gray-400"
      />
      <p className="text-red-600">{errors.name?.message}</p>
    </>
  );
};

export default InputField;

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { postSignupAsync } from "./SignupSlice";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  return (
    <>
      <div className="xs:bg-[#bbb] sm:bg-yellow-900 md:bg-red-600 lg:bg-yellow-300 xl:bg-slate-500 2xl:bg-red-400">
        <div className="md:container mx-auto h-screen w-screen bg-amber-200 flex items-center justify-center flex-col md:flex-row  ">
          <div className="overflow-hidden w-full h-2/4 md:h-3/4 bg-slate-800 md:w-1/2">
            <div className="relative">
              <img
                src="https://gayajidham.com/uploads/article/books-literature_47.jpeg"
                className="background cover w-full h-full"
              />
              <div className="absolute inset-0 top-[50%] left-1/2 translate-x-[-10%] translate-y-[-50%] font-extrabold text-white text-2xl ">
                Book
              </div>
            </div>
          </div>
          <div className="bg-red-300 flex flex-col justify-start md:justify-center p-7 w-full h-3/4 md:w-1/2 sm:px-14 lg:px-14 xl:px-24">
            <h1 className="text-center sm:text-lg xs:text-sm font-bold">
              Welcome To book Scripture
            </h1>
            <form
              className="flex flex-col"
              onSubmit={handleSubmit((data) => {
                console.log(data);
                dispatch(postSignupAsync(data));
                reset();
                window.location = "/login";
              })}
            >
              <div className="flex flex-row md:flex-col xl:flex-row justify-between">
                <input
                  className="rounded-sm sm:w-[50%] md:w-full xl:w-[50%] h-8 px-3 my-4"
                  placeholder="First Name"
                  type="text"
                  {...register("firstName", { required: true })}
                />
                <input
                  className="rounded-sm sm:w-[40%] md:w-full xl:w-[45%] h-8 px-3 my-4"
                  placeholder="Last Name"
                  type="text"
                  {...register("lastName", { required: true })}
                />
              </div>
              <input
                className="rounded-sm h-8 px-3 my-4"
                placeholder="Phone"
                type="tel"
                {...register("phone", {
                  required: true,
                  pattern: /^(?:\+?88|0088)?01[15-9]\d{8}$/,
                })}
              />
              <input
                className="rounded-sm h-8 px-3 my-4"
                placeholder="Email"
                type="email"
                {...register("email", { required: true })}
              />
              <input
                className="rounded-sm h-8 my-4 px-3"
                placeholder="Password"
                type="password"
                {...register("password", { required: true })}
              />
              <button
                className="mt-5 px-7 py-3 rounded-full bg-blue-700 text-white uppercase font-medium"
                type="submit"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

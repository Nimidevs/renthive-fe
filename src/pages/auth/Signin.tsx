import { Link } from "react-router";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import logo from "../../assets/RentHive.svg";
import side_image from "../../assets/login_side_image.svg";
import google from "../../assets/google_icon.svg";
import { useState } from "react";

const Signin = () => {
  const [inputType, setInputType] = useState("password");
  const toggleType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  return (
    <div className="h-screen flex flex-row justify-between pr-4 pl-6 py-4 bg-white ">
      <div className="h-full flex-grow">
        <img src={logo} alt="" className="max-h-[25px]" />
        <div className="flex flex-col min-h-[90vh] items-center justify-center">
          <div className="flex flex-col justify-center gap-6 items-center mb-8">
            <h1 className="font-semibold text-[33px] py-0 my-0 leading-0">
              Welcome Back
            </h1>
            <span className="text-[#20212466] text-sm">
              Log in to your RentHive account
            </span>
          </div>

          <form action="" className="w-[400px] flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <label
                htmlFor=""
                className="flex flex-col gap-2 font-medium text-base"
              >
                Email address
                <input
                  type="email"
                  placeholder="email@gmail.com"
                  className="w-full px-3 py-2 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor=""
                  className="flex flex-col gap-2 font-medium text-base"
                >
                  Password
                  <div className="w-full px-3 flex items-center justify-between py-2 border border-gray-400 rounded-md focus-within:border-none focus-within:ring-2 focus-within:ring-blue-500">
                    <input
                      type={inputType}
                      placeholder="**************"
                      className="focus:border-none focus:outline-none w-full"
                    />
                    {
                      <button type="button" onClick={() => toggleType()}>
                        {inputType === "password" ? <Eye /> : <EyeOff />}
                      </button>
                    }
                  </div>
                </label>
                <div className="flex justify-between">
                  <label htmlFor="" className="flex items-center gap-1.5">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-400 rounded"
                    />
                    Remember me
                  </label>
                  <Link to="" className="text-[#587DBD]">
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 w-full">
              <button className="w-full bg-blue-600 text-white font-semibold text-xl py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Sign in
              </button>
              <button className="flex items-center justify-center gap-4 w-full bg-white text-[#202124] font-semibold text-xl py-2 px-4 rounded-md border border-gray-400">
                <img src={google} alt="" />
                Sign in with Google
              </button>
            </div>
          </form>

          <div className="mt-16">
            <span className="font-medium text-lg">Don't have an account?</span>{" "}
            <Link
              to={"/auth/signup"}
              className="text-[#587DBD] font-semibold text-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#1A73E8] rounded-[15px] w-[750px] flex items-center justify-center flex-shrink-0">
        <img src={side_image} alt="" className="object-contain max-h-full" />
      </div>
    </div>
  );
};

export default Signin;

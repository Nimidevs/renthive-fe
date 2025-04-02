import logo from "../../assets/RentHive.svg";
import google from "../../assets/google_icon.svg";
import { useState } from "react";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import vendors_image from "../../assets/vendor_side_image.svg";
import customers_image from "../../assets/customer_side_image.svg";
import { Link } from "react-router";

const Signup = () => {
  const [role, setRole] = useState("customer");
  const [inputType, setInputType] = useState("password");
  const [phone, setPhone] = useState("");
  const toggleType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };
  const toggleRole = () => {
    setRole((prevRole) => (prevRole === "customer" ? "vendor" : "customer"));
  };
  return (
    <div className="h-screen flex flex-row justify-between pr-4 pl-6 py-4 bg-white">
      <div className="h-full flex-grow">
        <div className="flex items-center justify-between px-4 pt-1">
          <img src={logo} alt="" className="max-h-[25px]" />
          <button
            onClick={toggleRole}
            className="border-none outline-none bg-[#1A73E8] rounded-4xl flex gap-2 p-1"
          >
            <span
              className={`p-2 text-sm ${
                role === "customer"
                  ? "bg-white rounded-4xl text-[#1A73E8]"
                  : "bg-transparent text-white"
              }`}
            >
              Customer
            </span>
            <span
              className={`p-2 text-sm ${
                role === "vendor"
                  ? "bg-white rounded-4xl text-[#1A73E8]"
                  : "bg-transparent text-white"
              }`}
            >
              Vendor
            </span>
          </button>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center gap-1 mb-5">
            <h1 className="text-[#202124] font-semibold text-3xl">
              Sign up as a {role.charAt(0).toUpperCase() + role.slice(1)}
            </h1>
            <span className="text-[#20212466] font-normal text-base">
              Enter details to create your account
            </span>
          </div>
          <form action="" className="w-[400px] flex flex-col gap-3">
            <div className="flex flex-col items-center w-full">
              {/* Google Sign-In Button */}
              <button className="flex items-center justify-center gap-3 w-full bg-white text-[#202124] font-medium text-lg py-2 px-4 rounded-md border border-gray-400 shadow-sm hover:shadow-md">
                <img src={google} alt="Google" className="w-5 h-5" />
                Sign up with Google
              </button>

              {/* OR Separator */}
              <div className="flex items-center w-full mt-3">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="px-3 text-[#202124] font-normal text-xl">
                  or
                </span>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <label
                htmlFor=""
                className="flex flex-col gap-2 font-medium text-base"
              >
                First name
                <input
                  type="text"
                  placeholder="john"
                  className="w-full px-3 py-2 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col gap-2 font-medium text-base"
              >
                Last name
                <input
                  type="text"
                  placeholder="doe"
                  className="w-full px-3 py-2 border border-gray-400 focus:border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </label>
            </div>
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
            <PhoneInput
              country={"ng"} // Default country (Nigeria, change as needed)
              value={phone}
              onChange={setPhone}
              enableSearch
              containerStyle={{
                marginTop: "15px",
              }}
              inputStyle={{
                width: "100%",
                border: "1px solid #99a1af",
              }}
            />
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

              <label htmlFor="">
                <label htmlFor="" className="flex items-center gap-1.5">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-400 rounded"
                  />
                  I agree to Terms & Policy
                </label>
              </label>
            </div>
            <div className="mt-2">
              <button className="w-full bg-blue-600 text-white font-semibold text-xl py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Create my account
              </button>
            </div>
          </form>
          <div className="mt-4">
            <span className="font-medium text-lg">
              Already have an account?
            </span>{" "}
            <Link
              to={"/auth/signin"}
              className="text-[#587DBD] font-semibold text-lg"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#1A73E8] rounded-[15px] w-[680px] flex items-center justify-center flex-shrink-0">
        <img
          src={role === "customer" ? customers_image : vendors_image}
          alt=""
          className="object-contain max-h-full"
        />
      </div>
    </div>
  );
};

export default Signup;

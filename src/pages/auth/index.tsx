/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { loginApi } from "../../constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import doctors from "../../assets/doctors.png";

type formInput = {
  email: string;
  password: string;
};

export default function SignIn({ setShowModal }: any) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = async (data) => {
    console.log(data);
    setLoading(true);
    await axios.post(loginApi, {
      data,
    });
    setLoading(false);
    toast.success("Login success");
    navigate("/admin");
    setShowModal(false);
  };

  return (
    <div className="bg-white flex h-screen">
      <div>
        <div>
          <div className=" flex-1 absolute w-[700px] h-screen top-0 left-0 bg-[#869ca3] overflow-hidden">
            <div className="inline-flex items-center absolute top-[50px] left-32">
              <img
                className="relative w-[50px] h-[50px]"
                alt="Logo"
                src={logo}
              />
              <div className="relative w-fit mt-[-2px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[50px] text-center tracking-[0] leading-[normal]">
                UG Hospital
              </div>
            </div>
            <div className="absolute w-[1161px] h-1/2 top-40 left-[-225px]">
              <div className="relative h-[1161px] rounded-[580.5px]">
                <div className="absolute w-[1013px] h-[951px] top-[105px] left-[68px] bg-[#0f4770] rounded-[506.64px/475.51px]" />
                <div className="absolute w-[1161px] h-[1161px] top-0 left-0 rounded-[580.5px] border-[29.3px] border-solid border-[#0f4770]" />
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center w-1/2 justify-end gap-10 absolute top-[150px] left-1/2">
            <div className="flex flex-col items-center gap-2">
              <div className="text-5xl font-bold text-black">Welcome back</div>
              <p className="text-xl text-[#878787]">
                UG Hospital - Department of Procurement Portal
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col items-start gap-4"
            >
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="email" className="text-lg text-black">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  {...register("email", {
                    required: true,
                  })}
                  className="w-[490px] p-2 rounded-[10px] border border-solid border-[#b5b6b7]"
                  placeholder="Email address"
                />
              </div>
              <div className="flex flex-col items-start gap-1">
                <label htmlFor="password" className="text-lg text-black">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  {...register("password", {
                    required: true,
                  })}
                  className="w-[490px] p-2 rounded-[10px] border border-solid border-[#b5b6b7]"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="w-[491px] py-3.5 bg-[#0f4770] rounded-[10px] text-white font-bold"
              >
                {loading ? "Loading....." : "Sign In"}
              </button>
              <div className="flex w-[490px] items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 block text-sm leading-6 text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-[#0f4770] font-medium">
                  Forgot password?
                </div>
              </div>
            </form>
          </div>
          <img
            className="absolute w-[800px] h-[58.7vh] top-[280px] left-0 object-cover"
            alt="Doctors"
            src={doctors}
          />
        </div>
      </div>
    </div>
  );
}

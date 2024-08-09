/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserApi } from "../../../../constants";
import { useState } from "react";
import { toast } from "react-toastify";

type formInput = {
  email: string;
  name: string;
  staffId: string;
  role: string;
};

const NewUserForm = ({ setShowModal }: any) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = async (data) => {
    setLoading(true);
    await axios.post(createUserApi, {
      data,
    });
    setLoading(false);
    toast.success("User Successfully Added");
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="relative -space-y-px rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
        <div>
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            {...register("email", {
              required: true,
            })}
            type="email"
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
            placeholder="Email address"
          />
        </div>
      </div>

      <div className="relative -space-y-px rounded-md shadow-sm mt-6">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
        <div>
          <label className="sr-only">Name</label>
          <input
            {...register("name", {
              required: true,
            })}
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
            placeholder="Name"
          />
        </div>
      </div>

      <div className="relative -space-y-px rounded-md shadow-sm mt-6">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
        <div>
          <label className="sr-only">Staff Id</label>
          <input
            {...register("staffId", {
              required: true,
            })}
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
            placeholder="Staff ID"
          />
        </div>
      </div>

      <div className="relative -space-y-px rounded-md shadow-sm mt-6">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
        <div>
          <select
            {...register("role", {
              required: true,
            })}
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
          >
            <option>Employee</option>
            <option>Admin</option>
          </select>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full mt-6 p-3 justify-center rounded-md bg-[#153D6F] text-sm font-semibold leading-6 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loading ? <h1>Loading....</h1> : <h1>Continue</h1>}
        </button>
      </div>
    </form>
  );
};

export default NewUserForm;

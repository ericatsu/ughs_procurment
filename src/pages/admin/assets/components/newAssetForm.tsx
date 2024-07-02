/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { createAssetApi } from "../../../../constants";
import { useState } from "react";
import { toast } from "react-toastify";

type formInput = {
  name: string;
  tag: string;
  serialNumber: string;
  purchaseDate: string;
  expiryDate: string;
};

const NewAssetForm = ({ setShowModal }: any) => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = async (data) => {
    setLoading(true);
    await axios.post(createAssetApi, {
      data,
    });
    setLoading(false);
    toast.success("Asset Successfully Added");
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
            {...register("name", {
              required: true,
            })}
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
            placeholder="Name"
          />
        </div>
      </div>

      <div className="relative -space-y-px rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
        <div>
          <label className="sr-only">Name</label>
          <input
            {...register("tag", {
              required: true,
            })}
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
            placeholder="Tag"
          />
        </div>
      </div>

      <div className="relative -space-y-px rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
        <div>
          <label className="sr-only">Staff Id</label>
          <input
            {...register("serialNumber", {
              required: true,
            })}
            className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
            placeholder="Serial Number"
          />
        </div>
      </div>

      <div className="my-3">
        <h3>Purchase Date</h3>
        <div className="relative -space-y-px rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
          <div>
            <input
              className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
              type="date"
              {...register("purchaseDate", {
                required: true,
              })}
            />
          </div>
        </div>
      </div>

      <div className="my-3">
        <h3>Expiry Date</h3>
        <div className="relative -space-y-px rounded-md shadow-sm">
          <div className="pointer-events-none absolute inset-0 z-10 rounded-md ring-1 ring-inset ring-gray-300" />
          <div>
            <input
              className="relative block w-full rounded-t-md border-0 p-3 text-gray-900"
              type="date"
              {...register("expiryDate", {
                required: true,
              })}
            />
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {loading ? <h1>Loading....</h1> : <h1>Continue</h1>}
        </button>
      </div>
    </form>
  );
};

export default NewAssetForm;

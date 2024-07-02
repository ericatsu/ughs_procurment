/* eslint-disable @typescript-eslint/no-explicit-any */
const MakeRequestForm = ({ setShowModal }: any) => {
  return (
    <div>
      <h1>Are you sure you want to make a request for this item?</h1>
      <div>
        <button className="bg-blue-600 text-white p-3 rounded-lg mt-4 px-6">
          Yes
        </button>
        <button
          className="bg-red-600 text-white p-3 rounded-lg mt-4 px-6 ml-4"
          onClick={() => setShowModal()}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default MakeRequestForm;

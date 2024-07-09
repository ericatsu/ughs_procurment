import { Modal } from "antd";
import { useState } from "react";

const DeleteBtn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
        />
      </svg>

      <Modal
        onCancel={() => setShowModal(false)}
        title="Add New Employee"
        centered
        open={showModal}
        footer={false}
      >
        <div>
          <h1>Are you sure you want to make a request for this item?</h1>
          <div>
            <button
              onClick={() => {
                return handleMakeRequest();
              }}
              className="bg-blue-600 text-white p-3 rounded-lg mt-4 px-6"
            >
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
      </Modal>
    </>
  );
};

export default DeleteBtn;

import { Modal } from "antd";
import axios from "axios";
import { makeRequestApi } from "../../../../constants";
import { toast } from "react-toastify";

/* eslint-disable @typescript-eslint/no-explicit-any */
const MakeReqBtn = ({ setShowModal, showModal, asset }: any) => {
  const userString = localStorage.getItem("user");

  const user: any = userString ? JSON.parse(userString) : {};

  const handleMakeRequest = async () => {
    await axios.post(makeRequestApi, {
      asset: asset._id,
      employee: user._id,
    });
    setShowModal(false);
    toast.success("Request was successful");
  };

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-[#153D6F] text-white p-3 rounded-lg"
      >
        make request
      </button>
      <Modal
        onCancel={() => setShowModal(false)}
        title="Make Request"
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
              className="bg-[#153D6F] text-white p-3 rounded-lg mt-4 px-6"
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

export default MakeReqBtn;

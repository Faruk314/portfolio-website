import React from "react";

const Confirmation = ({
  loading,
  message,
  setOpenModal,
  setNotif,
  setLoading,
}) => {
  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.9)] z-40 flex items-center justify-center">
      {loading && (
        <div className="flex flex-col items-center px-5 py-4 mx-2 space-y-2 bg-white rounded-md">
          <div className="flex flex-col items-center space-y-1">
            <h2 className="text-xl font-bold">Sending your message</h2>
            <span className=""> Please wait a moment</span>
          </div>

          <div className="loader"></div>
        </div>
      )}

      {!loading && message !== "" && (
        <div className="flex flex-col items-center px-5 py-5 max-w-[22rem] mx-2 space-y-2 bg-white rounded-md">
          <div className="flex flex-col items-center space-y-4">
            <p className="font-bold text-center">{message}</p>

            <button
              onClick={() => {
                setLoading(false);
                setNotif("");
                setOpenModal(false);
              }}
              className="px-2 md:px-4 text-[0.9rem] md:text-lg py-2 font-medium text-white bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Confirmation;

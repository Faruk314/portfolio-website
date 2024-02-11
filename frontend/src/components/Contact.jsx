import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = ({ setOpenContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setOpenContact(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill out all the fields", {
        position: "top-right",
        closeButton: false,
      });

      return;
    }

    setLoading(true);
    setOpenModal(true);

    try {
      // localhost:9998
      const response = await axios.post(
        "https://contact.farukspahic.com/api/contact/sendMail",
        {
          name,
          email,
          message,
        }
      );

      if (response.status === 200) {
        toast.success(response.data, {
          position: "top-right",
        });
      }

      setLoading(false);
      setOpenModal(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(
        " There was an issue sending your message. Please try again or contact me directly at farukspahicdev@gmail.com",
        {
          position: "top-right",
          closeButton: true,
          closeOnClick: false,
          draggable: false,
          progressStyle: {
            background: "red",
          },
        }
      );
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] z-40 flex items-center justify-center">
      <div
        ref={myRef}
        className={classNames(
          "grid items-center mx-auto mt-10 bg-white rounded-lg md:mt-0",
          {
            "animate-up": myElementVisible,
          }
        )}
      >
        <button
          onClick={() => setOpenContact(false)}
          className="absolute top-2 right-0 h-[2rem] w-[2rem] text-xl text-black rounded-full"
        >
          <AiOutlineClose size={17} />
        </button>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center px-6 py-10 space-y-5 shadow-md md:p-20"
        >
          <div className="flex flex-col space-y-5 max-w-[30rem]">
            <h2 className="text-2xl font-bold text-center md:text-4xl">
              Let’s work together to create something great.
            </h2>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-2 md:items-center md:flex-row">
              <div>
                <label className="text-[1.1rem]">Name</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[1.1rem]">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-[1.1rem]">Message</label>
              <textarea
                rows={4}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button className="flex items-center w-full justify-center py-[0.6rem] border-blue-500 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-white  bg-blue-600 rounded-md border">
              {!loading && <span>Send</span>}
              {loading && <span className="loader"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

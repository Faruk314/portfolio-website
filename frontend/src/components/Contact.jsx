import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import axios from "axios";

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
      setOpenModal(true);
      setNotif("Please fill out all the fields before submitting the form.");
      return;
    }

    setLoading(true);
    setOpenModal(true);

    try {
      const response = await axios.post(
        "http://localhost:9998/api/contact/sendMail",
        {
          name,
          email,
          message,
        }
      );
      setNotif(response.data);
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setLoading(false);
      setNotif(
        " There was an issue sending your message. Please try again or contact me directly at farukspahicdev@gmail.com."
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
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="text-[1.1rem]">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
                  placeholder="Email"
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
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button className="flex items-center w-full justify-center py-[0.6rem] border-blue-500 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-white hover:text-blue-500 bg-blue-600 rounded-md hover:bg-transparent hover:border-blue-500 border">
              <span>Send</span>
            </button>

            {notif && <span className="text-center text-red-500">{notif}</span>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

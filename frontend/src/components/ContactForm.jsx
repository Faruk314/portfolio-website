import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { RiGithubLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";
import axios from "axios";
import Confirmation from "./Confirmation";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [notif, setNotif] = useState("");
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

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
    <section id="contact" className="mt-10 mb-20 md:mt-0">
      <div className="flex flex-col items-center justify-center space-y-5 text-center md:mb-20">
        <h2 className="text-2xl font-extrabold text-gray-900 md:text-4xl">
          Contact me
        </h2>

        <p className="flex space-x-2 font-medium text-center text-gray-600 md:text-xl">
          Fill in the form and get in touch
        </p>
      </div>

      <div
        ref={myRef}
        className={classNames("grid items-center mx-auto mt-10 md:mt-0", {
          "animate-up": myElementVisible,
        })}
      >
        {/* <div className="items-center justify-center hidden text-white bg-gray-900 md:flex">
          <div className="flex flex-col space-y-5">
            <a
              href="mailto:farukspahicdev@gmail.com"
              className="flex items-center space-x-2 underline text hover:text-gray-600"
            >
              <AiOutlineMail size={30} />
              <span>farukspahicdev@gmail.com</span>
            </a>

            <a
              href="https://github.com/Faruk314"
              className="flex space-x-2 hover:text-gray-600"
            >
              <RiGithubLine size={30} />
              <div>
                <span className="text-2xl font-bold">GitHub</span>
              </div>
            </a>

          </div>
        </div> */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-center px-4 py-4 mx-4 space-y-5 shadow-md md:mx-auto md:py-20 md:px-20"
        >
          <div className="flex flex-col w-[18rem] md:w-[20rem] lg:w-[30rem] ">
            <input
              className="w-full p-2 border border-black rounded-sm focus:outline-none"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              className="w-full p-2 mt-5 border border-black rounded-sm focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              rows={4}
              className="w-full p-2 mt-10 border border-black rounded-sm focus:outline-none"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="flex items-center px-4 py-2 space-x-2 font-medium text-white bg-gray-900 rounded-md text-md md:text-lg hover:bg-gray-700"
          >
            <IoMdSend size={20} />
            <span>Submit</span>
          </button>
        </form>
      </div>
      {openModal && (
        <Confirmation
          setOpenModal={setOpenModal}
          loading={loading}
          message={notif}
          setNotif={setNotif}
          setLoading={setLoading}
        />
      )}
    </section>
  );
};

export default ContactForm;

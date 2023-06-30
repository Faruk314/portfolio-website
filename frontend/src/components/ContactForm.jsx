import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import { RiGithubLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import classNames from "classnames";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const {
    ref: myRef,
    inView: myElementVisible,
    entry,
  } = useInView({
    triggerOnce: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can send the form data to a server or perform any other actions
    console.log("Form submitted:", name, email, message);
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="my-20">
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
        className={classNames(
          "container grid md:grid-cols-2 lg:flex-row mx-auto mt-10 md:mt-0 shadow-[0_3px_10px_rgb(0,0,0,0.2)]",
          {
            "animate-up": myElementVisible,
          }
        )}
      >
        <div className="items-center justify-center hidden text-white bg-gray-900 md:flex">
          <div className="flex flex-col space-y-5">
            <a
              href=""
              className="flex items-center space-x-2 underline text hover:text-gray-600"
            >
              <AiOutlineMail size={30} />
              <span>farukspahictz@gmail.com</span>
            </a>

            <a href="" className="flex space-x-2 hover:text-gray-600">
              <RiGithubLine size={30} />
              <div>
                <span className="text-2xl font-bold">GitHub</span>
              </div>
            </a>

            <a href="" className="flex space-x-2 hover:text-gray-600">
              <AiOutlineLinkedin size={30} />
              <div>
                <span className="text-2xl font-bold">Linkedin</span>
              </div>
            </a>
          </div>
        </div>
        <form className="flex flex-col items-center justify-center py-8 mx-auto space-y-5 md:py-20">
          <div className="flex flex-col w-[20rem] lg:w-[30rem]">
            <input
              className="w-full p-2 border border-black rounded-sm focus:outline-none"
              placeholder="Name"
            />

            <input
              className="w-full p-2 mt-5 border border-black rounded-sm focus:outline-none"
              placeholder="Email"
            />

            <textarea
              rows={4}
              className="w-full p-2 mt-10 border border-black rounded-sm focus:outline-none"
              placeholder="Message"
            />
          </div>

          <button
            type="submit"
            className="flex items-center px-2 py-2 space-x-2 font-medium text-white bg-gray-900 rounded-md text-md md:text-lg md:px-4 md:py-2 hover:bg-gray-700"
          >
            <IoMdSend size={20} />
            <span>Submit</span>
          </button>
        </form>
      </div>
    </section>
    // <section className="flex flex-col items-center justify-center bg-white h-[40rem]">
    //   <h2 className="my-5 text-4xl font-bold text-center">Contact</h2>

    //   <div className="flex flex-col mx-2 w-[25rem]">
    //     <label className="text-gray-600">Name</label>
    //     <input className="p-1 bg-gray-100 border border-black rounded focus:outline-none" />

    //     <label className="mt-5 text-gray-600">Email</label>
    //     <input className="p-1 bg-gray-100 border border-black rounded focus:outline-none" />

    //     <label className="mt-5 text-gray-600">Message</label>
    //     <textarea
    //       rows={5}
    //       className="p-1 bg-gray-100 border border-black rounded focus:outline-none"
    //     />

    //     <button className="flex items-center px-4 py-2 mx-auto my-5 space-x-2 font-medium text-white bg-gray-800 rounded-md hover:bg-gray-700">
    //       Submit
    //     </button>
    //   </div>
    // </section>
  );
};

export default ContactForm;

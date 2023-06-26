import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <section className="my-20">
      <div className="flex flex-col items-center justify-center mb-20 space-y-5 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Contact me
        </h2>

        <p className="flex space-x-2 text-xl font-medium text-center text-gray-600">
          Full Stack Web Developer
        </p>
      </div>

      <div className="container flex h-[30rem] mx-auto shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="w-1/2 bg-gray-900"></div>
        <div className="flex flex-col items-center justify-center space-y-5">
          <input className="p-1 border border-black rounded-md w-[30rem]" />

          <input className="p-1 border border-black rounded-md w-[30rem]" />

          <button className="flex items-center px-4 py-1 space-x-1 font-medium text-black border border-black rounded-md hover:bg-gray-900 hover:text-white">
            <IoMdSend size={20} />
            <span>Submit</span>
          </button>
        </div>
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

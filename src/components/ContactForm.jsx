import React, { useState } from "react";

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
    <div></div>
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

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose } from "react-icons/ai";
import classNames from "classnames";
import axios from "axios";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

const Contact = ({ setOpenContact }) => {
  const { t } = useTranslation("contact");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        document.body.classList.remove("no-overflow");
        setOpenContact(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error(t("emptyFieldsText"), {
        position: "top-right",
        closeButton: false,
      });

      return;
    }

    setLoading(true);

    try {
      axios.defaults.timeout = 5000;

      const response = await axios.post(
        process.env.REACT_APP_CONTACT_ENDPOINT,
        {
          name,
          email,
          message,
        }
      );

      if (response.status === 200) {
        toast.success(t("contactSuccess"), {
          position: "top-right",
        });
      }

      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setOpenContact(false);
      document.body.classList.remove("no-overflow");
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast(t("contactFail"), {
        position: "top-right",
        closeButton: true,
        closeOnClick: false,
        draggable: false,
        progressStyle: {
          background: "red",
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-[rgb(0,0,0,0.7)] z-40 flex items-center justify-center">
      <div
        className={classNames(
          "grid items-center mx-2 md:mx-auto mt-10 bg-white rounded-lg md:mt-0 animate-up"
        )}
      >
        <button
          onClick={(e) => {
            e.stopPropagation();
            document.body.classList.remove("no-overflow");
            setOpenContact(false);
          }}
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
              {t("contactTitle")}
            </h2>
            <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-2 md:items-center md:flex-row">
              <div>
                <label className="md:text-[1.1rem]">{t("nameLabel")}</label>
                <input
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label className="md:text-[1.1rem]">{t("emailLabel")}</label>
                <input
                  type="email"
                  className="w-full p-1 md:p-2 border border-gray-300 rounded-md focus:outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="md:text-[1.1rem]">{t("messageLabel")}</label>
              <textarea
                rows={4}
                className="w-full p-1 md:p-2 border border-gray-300 rounded-md focus:outline-none"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button
              disabled={loading}
              className="flex items-center w-full justify-center py-[0.6rem] border-blue-500 text-[0.9rem] md:text-lg space-x-1 md:space-x-2 font-medium text-white  bg-blue-600 rounded-full border"
            >
              {!loading && <span>{t("buttonText")}</span>}
              {loading && <span className="loader"></span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

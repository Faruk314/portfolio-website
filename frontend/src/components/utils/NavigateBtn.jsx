import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

const NavigateBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goTopHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const listenToScroll = () => {
      let height = 100;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;

      if (winScroll > height) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", listenToScroll);
  }, [setIsVisible]);

  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
      {isVisible && (
        <button
          className="bg-blue-600 text-white rounded-lg h-[2.8rem] w-[2.8rem] flex items-center justify-center"
          onClick={goTopHandler}
        >
          <IoIosArrowUp size={30} className="" />
        </button>
      )}
    </div>
  );
};

export default NavigateBtn;

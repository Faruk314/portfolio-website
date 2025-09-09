import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Skills } from "../components/Skills";
import NavigateBtn from "../components/utils/NavigateBtn";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import { Footer } from "../components/Footer";

const Main = () => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Navbar setOpenContact={setOpenContact} openContact={openContact} />
      <About setOpenContact={setOpenContact} />
      <Skills />
      <Projects />
      <Footer setOpenContact={setOpenContact} />
      <NavigateBtn />

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </>
  );
};

export default Main;

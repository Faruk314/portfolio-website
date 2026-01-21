import { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { Skills } from "../components/Skills";
import NavigateBtn from "../components/utils/NavigateBtn";
import Contact from "../components/Contact";
import PersonalProjects from "../components/PersonalProjects";
import ClientProjects from "../components/ClientProjects";
import { Footer } from "../components/Footer";

const Main = () => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url(/images/background.jpg)",
      }}
    >
      <Navbar setOpenContact={setOpenContact} openContact={openContact} />
      <About setOpenContact={setOpenContact} />
      <Skills />
      <PersonalProjects />
      <ClientProjects />
      <Footer setOpenContact={setOpenContact} />
      <NavigateBtn />

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </div>
  );
};

export default Main;

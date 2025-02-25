import React, { useState } from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Tools from "../components/Tools";
import ClientProjects from "../components/ClientProjects";
import NavigateBtn from "../components/utils/NavigateBtn";
import Contact from "../components/Contact";
import PersonalProjects from "../components/PersonalProjects";

const Main = () => {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Navbar setOpenContact={setOpenContact} openContact={openContact} />
      <About setOpenContact={setOpenContact} />
      <Tools />
      <ClientProjects />
      <PersonalProjects />
      <NavigateBtn />

      {openContact && <Contact setOpenContact={setOpenContact} />}
    </>
  );
};

export default Main;

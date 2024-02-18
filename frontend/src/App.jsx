import { useState } from "react";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import NavigateBtn from "./components/utils/NavigateBtn";
import ClientProjects from "./components/ClientProjects";

function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <>
      <Navbar setOpenContact={setOpenContact} />
      <About setOpenContact={setOpenContact} openContact={openContact} />
      <Technologies />
      <ClientProjects />
      <Projects />
      <NavigateBtn />
      {/* <ContactForm /> */}
    </>
  );
}

export default App;

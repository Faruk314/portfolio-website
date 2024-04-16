import { Suspense, useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import NavigateBtn from "./components/utils/NavigateBtn";
import ClientProjects from "./components/ClientProjects";
import Loader from "./components/Loader.jsx";

function App() {
  const [openContact, setOpenContact] = useState(false);

  return (
    <Suspense fallback={<Loader />}>
      <Navbar setOpenContact={setOpenContact} openContact={openContact} />
      <About setOpenContact={setOpenContact} />
      <Technologies />
      <ClientProjects />
      <Projects />
      <NavigateBtn />
      {openContact && <Contact setOpenContact={setOpenContact} />}
    </Suspense>
  );
}

export default App;

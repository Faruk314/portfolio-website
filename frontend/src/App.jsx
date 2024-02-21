import { Suspense, useEffect, useState } from "react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import NavigateBtn from "./components/utils/NavigateBtn";
import ClientProjects from "./components/ClientProjects";
import Loader from "./components/Loader.jsx";
import { useTranslation } from "react-i18next";

function App() {
  const [openContact, setOpenContact] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const { i18n } = useTranslation();

  useEffect(() => {
    const getLanguage = async () => {
      const data = i18n.language;

      setCurrentLanguage(data);
    };

    getLanguage();
  }, [i18n.language]);

  return (
    <Suspense fallback={<Loader />}>
      <Navbar
        currentLanguage={currentLanguage}
        setOpenContact={setOpenContact}
        openContact={openContact}
      />
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

import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import NavigateBtn from "./components/utils/NavigateBtn";

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Technologies />
      <Projects />
      <NavigateBtn />
      {/* <ContactForm /> */}
    </>
  );
}

export default App;

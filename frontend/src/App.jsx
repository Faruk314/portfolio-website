import { useTranslation } from "react-i18next";
import Loader from "./components/Loader";
import { Routes, Route, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";

function App() {
  const { ready } = useTranslation();
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return ready ? (
    <>
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Main />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>

      {previousLocation && (
        <Routes>
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      )}
    </>
  ) : (
    <Loader />
  );
}

export default App;

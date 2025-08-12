import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Booknow from "./Pages/Booknow";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Agenda from "./Pages/Agenda";
import Aos from "aos";
import GuideLine from "./Components/GuideLine";

function App() {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/Comingsoon";

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/shcaifest/" element={<Home />} />
        <Route path="/shcaifest/About" element={<About />} />
        <Route path="/shcaifest/Agenda" element={<Agenda />} />
        <Route path="/shcaifest/Contact" element={<Contact />} />
        <Route path="/shcaifest/Booknow" element={<Booknow />} />
        <Route path="/shcaifest/Error" element={<Error />} />
        <Route
          path="/shcaifest/HackathonRegistration"
          element={<GuideLine />}
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

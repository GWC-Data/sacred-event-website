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
import Guests from "./Pages/Guests";
import Sponsers from "./Pages/Sponsers";

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
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Agenda" element={<Agenda />} />
        <Route path="/Guests" element={<Guests />} />
        <Route path="/Sponsers" element={<Sponsers />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Booknow" element={<Booknow />} />
        <Route path="/Error" element={<Error />} />
        <Route
          path="/HackathonRegistration"
          element={<GuideLine />}
        />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </div>
  );
}

export default App;

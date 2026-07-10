import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Portfolio from "./components/sections/Portfolio/Portfolio";
import Services from "./components/sections/Services/Services";
import Contact from "./components/sections/Contacts/Contact";
import Footer from "./components/layout/Footer/Footer";

import AccountingRoutes from "./accounting/routes";

import "./index.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

          {AccountingRoutes}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Skills from "./components/sections/Skills/Skills";
import Footer from "./components/layout/Footer/Footer";
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
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;

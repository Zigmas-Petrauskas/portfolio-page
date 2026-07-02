import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header/Header";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import "./index.scss";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </>
  );
};

export default App;

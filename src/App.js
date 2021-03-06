import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import TVShows from "./components/TVShows";
import { useState } from "react";

function App() {
  const getTheme = localStorage.getItem("theme");

  if (getTheme === null) {
    localStorage.setItem("theme", "dark");
  }

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  return (
    <>
      <Navbar theme={theme} setTheme={setTheme} />

      <div
        className={`bg-${
          theme === "dark" ? "dark text-white" : "light text-dark"
        } `}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/movies" element={<Movies />}></Route>

          <Route path="/tvshows" element={<TVShows />}></Route>

          <Route path="/contact" element={<Contact />}></Route>

          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import PageNotFound from "./components/PageNotFound";
import TVShows from "./components/TVShows";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/movies" element={<Movies />}></Route>

        <Route path="/tvshows" element={<TVShows />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;

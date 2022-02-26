import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar({ theme, setTheme }) {
  const [search, setSearch] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(search);
  };

  const handleThemeClick = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <>
      {/* navbar-dark bg-dark */}
      <nav
        className={`navbar navbar-expand-lg navbar-${
          theme === "dark" ? "dark" : "light"
        } bg-${theme === "dark" ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            TMDB Movies & Shows
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="movies"
                >
                  Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="tvshows"
                >
                  TV Shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="contact"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <form className="d-flex" onSubmit={handleOnSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  name="searchInput"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                />
                <button
                  className={`btn btn-outline-${
                    theme === "dark" ? "light" : "dark"
                  }`}
                  type="submit"
                >
                  Search
                </button>
              </form>
              <button
                className={`btn ms-2 btn-${
                  theme === "dark" ? "light" : "dark"
                }`}
                type="submit"
                onClick={handleThemeClick}
              >
                Theme
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useEffect, useLayoutEffect, useState } from "react";
import { useGetMoviesAndTVShowsMutation } from "../service/MoviesAndShows";
import MovieAndShowCard from "./MovieAndShowCard";

function Movies() {
  const categoryLocal = localStorage.getItem("category");
  const pageNoLocal = localStorage.getItem("pageNo");

  if (categoryLocal === null) {
    localStorage.setItem("category", "popular");
  }

  if (pageNoLocal === null) {
    localStorage.setItem("pageNo", "1");
  }

  const [category, setCategory] = useState(localStorage.getItem("category"));
  const [pageNo, setPageNo] = useState(
    parseInt(localStorage.getItem("pageNo"))
  );

  const [getMovies, response] = useGetMoviesAndTVShowsMutation();

  useLayoutEffect(() => {
    getMovies({
      type: "movie",
      category: category,
      pageNo: pageNo,
    });
  }, [category, pageNo]);

  const { isError, isLoading, isSuccess, data, error } = response;

  const theme = localStorage.getItem("theme");

  const getHtmlData = () => {
    if (isError) {
      return (
        <div className="divCenter">
          <h2>Movies not found...</h2>
          <div>{error.data.errors[0]}</div>

          <button
            type="button"
            name="next"
            id="next"
            className="btn btn-primary btn-lg btn-block fs-6"
            onClick={() => {
              setPageNo(1);
            }}
          >
            Go Back to first page
          </button>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="divCenter">
          <h2>Movies Loading...</h2>
        </div>
      );
    }

    if (isSuccess) {
      return (
        <div className="container">
          <div className="row">
            {data.results.map((movie, key) => {
              return <MovieAndShowCard key={key} data={movie} />;
            })}
          </div>

          <div className="d-flex justify-content-between align-items-center pt-1">
            <button
              type="button"
              name="preveous"
              id="preveous"
              className={`btn btn-sm btn-block ${
                theme === "dark" ? "btn-light" : "btn-dark"
              }`}
              onClick={() => {
                if (pageNo === 1) {
                  alert("This is the first page");
                } else {
                  const newPage = pageNo - 1;
                  setPageNo(newPage);
                  localStorage.setItem("pageNo", newPage);
                }
              }}
            >
              Preveous
            </button>

            <div className="text-center" style={{ fontSize: "10px" }}>
              Current Page No: {pageNo}
            </div>

            <div className="text-center" style={{ fontSize: "10px" }}>
              Total Page No: {data.total_pages}
            </div>

            <button
              type="button"
              name="next"
              id="next"
              className={`btn btn-sm btn-block ${
                theme === "dark" ? "btn-light" : "btn-dark"
              }`}
              onClick={() => {
                if (pageNo === data.total_pages) {
                  alert("This is the last page");
                } else {
                  const newPageNo = pageNo + 1;
                  setPageNo(newPageNo);
                  localStorage.setItem("pageNo", newPageNo);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="pb-2">
      <div className="container">
        <div className=" d-flex justify-content-evenly align-items-center">
          <div
            className={`btn ${
              category === "popular"
                ? theme === "dark"
                  ? "btn-light"
                  : "btn-dark"
                : theme === "dark"
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
            onClick={() => {
              if (category !== "popular") {
                setCategory("popular");
                setPageNo(1);
                localStorage.setItem("category", "popular");
                localStorage.setItem("pageNo", "1");
              }
            }}
          >
            Popular
          </div>
          <div
            className={`btn ${
              category === "top_rated"
                ? theme === "dark"
                  ? "btn-light"
                  : "btn-dark"
                : theme === "dark"
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
            onClick={() => {
              if (category !== "top_rated") {
                setCategory("top_rated");
                setPageNo(1);
                localStorage.setItem("category", "top_rated");
                localStorage.setItem("pageNo", "1");
              }
            }}
          >
            Top Rated
          </div>
          <div
            className={`btn ${
              category === "upcoming"
                ? theme === "dark"
                  ? "btn-light"
                  : "btn-dark"
                : theme === "dark"
                ? "btn-outline-light"
                : "btn-outline-dark"
            }`}
            onClick={() => {
              if (category !== "upcoming") {
                setCategory("upcoming");
                setPageNo(1);
                localStorage.setItem("category", "upcoming");
                localStorage.setItem("pageNo", "1");
              }
            }}
          >
            Upcoming
          </div>
        </div>
      </div>
      <div className="mt-1">{getHtmlData()}</div>
    </div>
  );
}

export default Movies;

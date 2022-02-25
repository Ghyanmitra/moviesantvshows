import React, { useEffect, useLayoutEffect, useState } from "react";
import { useGetMoviesAndTVShowsMutation } from "../service/MoviesAndShows";
import MovieAndShowCard from "./MovieAndShowCard";

function Movies() {
  const [category, setCategory] = useState("popular");
  const [pageNo, setPageNo] = useState(1);

  const [getMovies, response] = useGetMoviesAndTVShowsMutation();

  useLayoutEffect(() => {
    getMovies({
      type: "movie",
      category: category,
      pageNo: pageNo,
    });
  }, [category, pageNo]);

  const { isError, isLoading, isSuccess, data, error } = response;

  console.log();

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
          <div className="row gy-5">
            {data.results.map((movie, key) => {
              return <MovieAndShowCard key={key} data={movie} />;
            })}
          </div>

          <div className="d-flex justify-content-between">
            <button
              type="button"
              name="preveous"
              id="preveous"
              className="btn btn-primary btn-lg btn-block w-25 fs-6"
              onClick={() => {
                if (pageNo === 1) {
                  alert("This is the first page");
                } else {
                  setPageNo(pageNo - 1);
                }
              }}
            >
              Preveous
            </button>

            <div>Current Page No: {pageNo}</div>

            <button
              type="button"
              name="next"
              id="next"
              className="btn btn-primary btn-lg btn-block w-25 fs-6"
              onClick={() => {
                if (data.total_pages === 500) {
                  alert("This is the last page");
                } else {
                  setPageNo(pageNo + 1);
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

  return <>{getHtmlData()}</>;
}

export default Movies;

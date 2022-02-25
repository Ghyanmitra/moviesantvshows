import React from "react";

function MovieAndShowCard({ data }) {
  const { id, title, vote_average, overview, poster_path, release_date } = data;

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-2 ">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="card-img-top rounded img-fluid"
        alt={title}
      />
      <div className="card-body">
        <div className="text-center fw-bold fs-5">{title}</div>
        <div className="text-start">Release date: {release_date}</div>
      </div>
    </div>
  );
}

export default MovieAndShowCard;

import React from "react";

function MovieAndShowCard({ data }) {
  const { id, title, vote_average, overview, poster_path, release_date } = data;

  return (
    <div className="col-lg-2 col-md-4 col-sm-6 p-1">
      <img
        src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
        className="rounded img-fluid"
        alt={title}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          height: 200,
          objectFit: "fill",
        }}
      />
      <div>
        <div className="text-center fw-bold" style={{ fontSize: "14px" }}>
          {title}
        </div>
        <div className="text-center" style={{ fontSize: "11px" }}>
          Release date: {release_date}
        </div>
      </div>
    </div>
  );
}

export default MovieAndShowCard;

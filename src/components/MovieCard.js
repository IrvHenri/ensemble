import React from "react";
import noImage from "../utils/no-image-available.png";
import { IoMdAddCircle } from "react-icons/io";
const MovieCard = ({ posterUrl, title, year }) => {
  return (
    <div className="movie-card">
      {posterUrl === "N/A" ? (
        <img src={noImage} alt={title} />
      ) : (
        <img src={posterUrl} alt={title} />
      )}

      <footer className="movie-card-content">
        <p>{title}</p>
        <p>{year}</p>
      </footer>
    </div>
  );
};

export default MovieCard;

import React from "react";
import { IoMdAddCircle } from "react-icons/io";
const MovieCard = ({ posterUrl, title, year }) => {
  return (
    <div className="movie-card">
      <img src={posterUrl} alt="movie poster"></img>
      <footer className="movie-card-content">
        <p>{title}</p>
        <p>{year}</p>
      </footer>
    </div>
  );
};

export default MovieCard;

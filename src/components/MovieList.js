import React from "react";
import MovieCard from "./MovieCard";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

const MovieList = ({ movies, isFavesList, eventHandler }) => {
  const flickityOptions = {
    draggable: false,
    freeScroll: true,
    cellAlign: "left"
  };
  return (
    <div className="movie-list-row">
      {movies &&
        movies.map((movie) => (
          <MovieCard
            key={`${movie.imdbID}-${isFavesList}`}
            posterUrl={movie.Poster}
            title={movie.Title}
            year={movie.Year}
            code={movie.imdbID}
            isFavesList={isFavesList}
            eventHandler={eventHandler}
            movie={movie}
          />
        ))}
    </div>
  );
};

export default MovieList;

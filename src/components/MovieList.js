import React from "react";
import MovieCard from "./MovieCard";
import Carousel from "react-elastic-carousel";

const MovieList = ({ movies, isFavesList, eventHandler }) => {
  return (
    <div className="movie-list-row">
      <Carousel itemsToShow={5} showEmptySlots>
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
      </Carousel>
    </div>
  );
};

export default MovieList;

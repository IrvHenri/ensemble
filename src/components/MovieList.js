import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ movies }) => {
  return (
    <div className="movie-list-row">
      {movies.length > 0
        ? movies.map(({ imdbID, Poster, Title, Year }) => (
            <MovieCard
              key={imdbID}
              posterUrl={Poster}
              title={Title}
              year={Year}
            />
          ))
        : "Loading"}
    </div>
  );
};

export default MovieList;

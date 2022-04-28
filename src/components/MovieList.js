import React from "react";
import MovieCard from "./MovieCard";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

const MovieList = ({ movies }) => {
  const flickityOptions = {
    draggable: false,
    freeScroll: true,
    cellAlign: "left"
  };

  return (
    <div className="movie-list-row">
      <Flickity options={flickityOptions} reloadOnUpdate>
        {movies &&
          movies.map(({ imdbID, Poster, Title, Year }) => (
            <MovieCard
              key={imdbID}
              posterUrl={Poster}
              title={Title}
              year={Year}
            />
          ))}
      </Flickity>
    </div>
  );
};

export default MovieList;

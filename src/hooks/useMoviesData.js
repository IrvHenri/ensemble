import { useState, useEffect } from "react";
import axios from "axios";

const useMoviesData = (searchQuery) => {
  const [moviesData, setMoviesData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  const addFavoriteMovie = (movie) => {
    let isAlreadyFavorited = favorites.some(
      (favorite) => favorite.imdbID == movie.imdbID
    );
    if (!isAlreadyFavorited) {
      const newFavorites = [...favorites, movie];
      setFavorites(newFavorites);
    }
  };

  const removeFavoriteMovie = (movie) => {
    const newFavorites = favorites.filter(
      (favorite) => favorite.imdbID !== movie.imdbID
    );
    setFavorites(newFavorites);
  };
  const getMoviesRequest = async () => {
    let response = await axios.get(
      `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchQuery}`
    );
    let data = await response.data;
    if (data.Search) {
      setMoviesData(data.Search);
      setLoading(false);
    }
  };
  useEffect(() => {
    getMoviesRequest();
  }, [searchQuery]);
  return [
    moviesData,
    favorites,
    addFavoriteMovie,
    removeFavoriteMovie,
    loading
  ];
};

export default useMoviesData;

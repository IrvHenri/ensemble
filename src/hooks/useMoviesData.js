import { useState, useEffect } from "react";
import axios from "axios";

const useMoviesData = (searchQuery) => {
  const [moviesData, setMoviesData] = useState([]);
  const [loading, setLoading] = useState(true);

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
  return [moviesData, loading];
};

export default useMoviesData;

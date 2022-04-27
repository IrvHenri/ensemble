import { useState, useEffect } from "react";
import axios from "axios";

const useMoviesData = () => {
  const [moviesData, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMoviesRequest = async () => {
    try {
      let response = await axios.get(
        `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
      );
      let data = await response.data;
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMoviesRequest();
  }, []);
  return [moviesData, loading];
};

export default useMoviesData;

import "./App.css";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import ListTitle from "./components/ListTitle";
import Searchbar from "./components/Searchbar";
import MovieList from "./components/MovieList";
import useMoviesData from "./hooks/useMoviesData";

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [moviesData, loading] = useMoviesData(searchQuery);
  const [favorites, setFavorites] = useState([]);
  return (
    <div className="App">
      <img src="/images/logo.png" className="logo" alt="logo" />
      <header className="movie-app-header">
        <ListTitle title="Movies" />
        <Searchbar setSearchQuery={setSearchQuery} value={searchQuery} />
      </header>
      <section className="movie-list-row">
        {!searchQuery ? (
          <h1 className="default-message">Search for a movie!</h1>
        ) : loading ? (
          <CircularProgress size={80} style={{ margin: "0 auto" }} />
        ) : (
          <MovieList movies={moviesData} />
        )}
      </section>
      <section className="movie-list-row">
        <ListTitle title="Favorites" />
        {favorites.length > 0 && <MovieList movies={favorites} />}
      </section>
    </div>
  );
}

export default App;

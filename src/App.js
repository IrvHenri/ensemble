import "./App.css";
import ListTitle from "./components/ListTitle";
import MovieList from "./components/MovieList";
import useMoviesData from "./hooks/useMoviesData";
function App() {
  const [moviesData] = useMoviesData();
  console.log({ moviesData });
  return (
    <div className="App">
      <section>
        <ListTitle title="Movies" />
        <MovieList movies={moviesData} />
      </section>
    </div>
  );
}

export default App;

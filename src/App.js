import "./App.css";
import ListTitle from "./components/ListTitle";
import useMoviesData from "./hooks/useMoviesData";
function App() {
  const [moviesData] = useMoviesData();
  console.log(moviesData);
  return (
    <div className="App">
      <section>
        <ListTitle title="Movies" />
      </section>
    </div>
  );
}

export default App;

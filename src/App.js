import "./App.css";
import useMoviesData from "./hooks/useMoviesData";
function App() {
  const [moviesData] = useMoviesData();
  console.log(moviesData);
  return <div className="App"></div>;
}

export default App;

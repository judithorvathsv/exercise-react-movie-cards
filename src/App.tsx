import MovieList from "./components/MovieList";
/* import AddMovie from "./components/AddMovie"; */
import MovieCard from "./components/MovieCard";

export function App() {
  return (
    <>
      <MovieCard />
      <MovieList />
    </>
  );
}

/*



--Add every movie object, that is created, to an array and render a <MovieCard> for every movie object with a map-function. 
Put them under the <AddMovie> component.

--When you click on a <MovieCard> it should be deleted from the array. 
*/

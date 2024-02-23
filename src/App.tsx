import { useState } from "react";
import AddMovie from "./components/AddMovie";
import MovieList from "./components/MovieList";

export type MovieProps = {
  title: string;
  rating: number;
  genre: string;
  description: string;
  id: number;
};

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);

  function handleAddMovie(movie: MovieProps) {
    const newMovie: MovieProps = {
      title: movie.title,
      rating: movie.rating,
      genre: movie.genre,
      description: movie.description,
      id: Math.random(),
    };

    setMovies((prevMovies) => {
      return [...prevMovies, newMovie];
    });
  }

  function handleDeleteMovie(id: number) {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  }

  return (
    <>
      <AddMovie onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
    </>
  );
}

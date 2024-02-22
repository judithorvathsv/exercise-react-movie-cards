import { useState } from "react";
import AddMovie from "./AddMovie";
import { MovieProps } from "./MovieList";

const MovieCard = () => {
  const [movie, setMovie] = useState<MovieProps>();

  function handleMovie(movie: MovieProps) {
    const newMovie: MovieProps = {
      title: movie.title,
      rating: movie.rating,
      genre: movie.genre,
      description: movie.description,
    };
    setMovie(newMovie);
  }

  return (
    <div>
      <AddMovie onAddMovie={handleMovie} />

      <h1>{movie?.title}</h1>
      <span>{movie?.rating}</span>
      <p>{movie?.genre}</p>
      <p>{movie?.description}</p>
    </div>
  );
};

export default MovieCard;

import MovieCard from "./MovieCard";
import { MovieProps } from "../App";

type MovieListProps = {
  movies: MovieProps[];
  onDeleteMovie: (id: number) => void;
};

const MovieList = ({ movies, onDeleteMovie }: MovieListProps) => {
  return (
    <>
      {movies.map((movie: MovieProps) => (
        <MovieCard key={movie.id} movie={movie} onDeleteMovie={onDeleteMovie} />
      ))}
    </>
  );
};

export default MovieList;

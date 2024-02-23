import { MovieProps } from "../App";

type MovieCardProps = {
  movie: MovieProps;
  onDeleteMovie: (id: number) => void;
};

const MovieCard = ({ movie, onDeleteMovie }: MovieCardProps) => {
  return (
    <div onClick={() => onDeleteMovie(movie.id)}>
      <h1>{movie.title}</h1>
      <span>{movie.rating}</span>
      <p>{movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
};
export default MovieCard;

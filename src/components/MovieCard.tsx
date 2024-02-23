import { MovieProps } from "../App";

type MovieCardProps = {
  movie: MovieProps;
  onDeleteMovie: (id: number) => void;
};

const MovieCard = ({ movie, onDeleteMovie }: MovieCardProps) => {
  return (
    <div className="movieCard" onClick={() => onDeleteMovie(movie.id)}>
      <div className="movieTitleAndRating">
        <h1>{movie.title}</h1>
        <span>{movie.rating}/5</span>
      </div>
      <p className="genre">{movie.genre}</p>
      <p>{movie.description}</p>
    </div>
  );
};
export default MovieCard;

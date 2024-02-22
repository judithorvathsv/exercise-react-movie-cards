import { useState } from "react";
import MovieCard from "./MovieCard";

export type MovieProps = {
  title: string;
  rating: number;
  genre: string;
  description: string;
};

const MovieList = () => {
  const [movieList, setMovieList] = useState<MovieProps[]>([]);

  function handleMovieList(movie: MovieProps) {
    setMovieList((prevMovie: any) => {
      return [...prevMovie, movie];
    });
  }

  return (
    <>
      {/*       {movieList.map((movieItem, index) => (
        <MovieCard key={index} movieItem={movieItem} />
      ))} */}
    </>
  );
};

export default MovieList;

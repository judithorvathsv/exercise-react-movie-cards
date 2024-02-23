import { MovieProps } from "./MovieList";

type NewMovieProps = {
  onAddMovie: (movie: MovieProps) => void;
};

const AddMovie = ({ onAddMovie }: NewMovieProps) => {
  function handleSubmit(e: any) {
    e.preventDefault();

    const title = e.target.title.value;
    const rating = e.target.rating.value;
    const genre = e.target.genre.value;
    const description = e.target.description.value;

    let newMovie = {
      title: title,
      rating: rating,
      genre: genre,
      description: description,
      id: Math.random()
    };
    onAddMovie(newMovie);
  }

  return (
    <section>
      <form id="movieForm" onSubmit={(e) => handleSubmit(e)}>
        <label className="" htmlFor="title">
          Title:
        </label>
        <input type="text" name="title" id="title" required />
        <label className="" htmlFor="rating">
          Rating:
        </label>
        <input type="range" name="rating" id="rating" min="0" max="5" step="1" />
        <label className="" htmlFor="genre">
          Genre:
        </label>

        <select name="genre" id="genre">
          <option value="Comedy">Comedy</option>
          <option value="Thriller">Thriller</option>
          <option value="Drama">Drama</option>
        </select>
        <label className="" htmlFor="description">
          Description:
        </label>
        <textarea name="description" id="description"></textarea>
        <button type="button" id="clearButton">
          Clear
        </button>
        <button type="submit" id="addButton">
          Add
        </button>
      </form>
    </section>
  );
};

export default AddMovie;

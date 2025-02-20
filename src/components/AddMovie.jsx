import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const navigate = useNavigate();
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterUrl: "",
  });

  const handleChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Movie</h2>
      <form>
        <input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Title" className="w-full p-2 mb-2 border rounded"/>
        <input type="text" name="director" value={movie.director} onChange={handleChange} placeholder="Director" className="w-full p-2 mb-2 border rounded"/>
        <select name="genre" value={movie.genre} onChange={handleChange} className="w-full p-2 mb-2 border rounded">
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Drama">Drama</option>
          <option value="Comedy">Comedy</option>
        </select>
        <input type="number" name="releaseYear" value={movie.releaseYear} onChange={handleChange} placeholder="Release Year" className="w-full p-2 mb-2 border rounded"/>
        <textarea name="synopsis" value={movie.synopsis} onChange={handleChange} placeholder="Synopsis" className="w-full p-2 mb-2 border rounded"/>
        <input type="url" name="posterUrl" value={movie.posterUrl} onChange={handleChange} placeholder="Poster Image URL" className="w-full p-2 mb-4 border rounded"/>
        <div className="flex gap-4">
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
          <button type="button" onClick={() => navigate("/")} className="px-4 py-2 bg-gray-500 text-white rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;

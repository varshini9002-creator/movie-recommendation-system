import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../css/Pages.css";
import movieBg from "../assets/movie-bg.jpg";

function Home() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  const searchMovies = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${search}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  };

  return (
    <div
  className="home-page"
  style={{ backgroundImage: `url(${movieBg})` }}
>
      <h1>Popular Movies</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search movie"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={searchMovies}>Search</button>
      </div>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Home;
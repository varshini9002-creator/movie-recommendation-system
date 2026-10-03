import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../css/Pages.css";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="page-container">
      <div className="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div className="movie-info">
          <h1>{movie.title}</h1>

          <p>⭐ {movie.vote_average?.toFixed(1)}</p>

          <p>{movie.overview}</p>

          <p>Release Date: {movie.release_date}</p>

        <button onClick={() => navigate(`/booking?movieId=${movie.id}&movieTitle=${encodeURIComponent(movie.title)}`)}>
             Book Tickets
        </button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StylesDetails } from "./Styles";
import netflix from "../../../../assets/logo2.png";

function Details() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [rating, setRating] = useState("Livre");
  const [cast, setCast] = useState([]);
  const [genres, setGenres] = useState([]);
  const apiKey = "ee96350ded551df8af41839e03615c58";

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
      );
      const data = await response.json();
      setMovie(data);

      const ratingResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${apiKey}`
      );
      const ratingData = await ratingResponse.json();

      const brRelease = ratingData.results.find((r) => r.iso_3166_1 === "BR");
      if (brRelease && brRelease.release_dates.length > 0) {
        setRating(brRelease.release_dates[0].certification || "Livre");
      }

      const creditsResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=pt-BR`
      );
      const creditsData = await creditsResponse.json();
      setCast(creditsData.cast.slice(0, 5));
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Carregando...</p>;

  const bgImage = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  const bgImageMobile = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const hours = Math.floor(movie.runtime / 60);
  const minutes = movie.runtime % 60;
  const duration = `${hours}h ${minutes}min`;

  return (
    <StylesDetails bg={bgImage} bg2={bgImageMobile}>
      <div className="img">
        <img src={netflix} alt="Logo da Netflix" />
      </div>
      <div className="info">
        <h1>
          {movie.title.length > 23
            ? movie.title.toUpperCase().slice(0, 19) + "..."
            : movie.title.toUpperCase()}
        </h1>
        <div className="info-extras">
          <p>{movie.release_date.slice(0, 4)}</p>
          <p>{rating || "Livre"}</p>
          <p>{duration}</p>
        </div>
      </div>

      <div className="description">
        <p>{movie.overview.slice(0, 120)}...</p>
      </div>

      <div className="btns">
        <button className="play">▶ Assistir</button>
        <button className="more-info">&#8505; Mais Informações</button>
      </div>

      <div className="casting">
        <h3>Elenco:</h3>
        <p>
          {cast.slice(0, 3).map((actor, index) => (
            <span key={actor.cast_id}>
              {actor.name}
              {index < 2 ? ", " : "..."}
            </span>
          ))}
        </p>
      </div>
      <div className="genres">
        <h3>Gênero:</h3>
        <p>
          {movie.genres
            .map((genre) => genre.name)
            .join(", ")
            .slice(0, 30)}
          {movie.genres.map((genre) => genre.name).join(", ").length > 30
            ? "..."
            : ""}
        </p>
      </div>
    </StylesDetails>
  );
}

export default Details;

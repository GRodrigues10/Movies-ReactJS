import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { Loading, StylesDetails } from "./Styles";
import netflix from "../../../../assets/logo2.png";

function Details() {
  const { id } = useParams();
  const { state } = useLocation();
  const type = state?.type || "movie"; // 'movie' ou 'tv'
  const [movie, setMovie] = useState(null);
  const [season, setSeason] = useState(null);
  const [rating, setRating] = useState("Livre");
  const [cast, setCast] = useState([]);
  const apiKey = "ee96350ded551df8af41839e03615c58";

  const navigate = useNavigate();
  const back = () => navigate("/main-app");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}?api_key=${apiKey}&language=pt-BR`
        );
        if (!response.ok) throw new Error("Não encontrado");
        const data = await response.json();
        setMovie(data);

        if (type === "movie") {
          const ratingResponse = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/release_dates?api_key=${apiKey}`
          );
          if (ratingResponse.ok) {
            const ratingData = await ratingResponse.json();
            const brRelease = ratingData.results?.find(
              (r) => r.iso_3166_1 === "BR"
            );
            if (brRelease?.release_dates?.length > 0) {
              setRating(brRelease.release_dates[0].certification || "Livre");
            }
          }
        }

        if (type === "movie") {
        } else if (type === "tv") {
          setSeason(data.number_of_seasons);
        }

        const creditsResponse = await fetch(
          `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${apiKey}&language=pt-BR`
        );
        if (creditsResponse.ok) {
          const creditsData = await creditsResponse.json();
          setCast(creditsData.cast?.slice(0, 5) || []);
        }
      } catch (error) {
        console.error("Erro ao buscar detalhes:", error);
        setMovie(null);
      }
    };

    fetchMovie();
  }, [id, type]);

  if (!movie)
    return (
      <Loading>
        <p>
          CARREGANDO<span className="dot">.</span>
          <span className="dot">.</span>
          <span className="dot">.</span>
        </p>
      </Loading>
    );

  const title = type === "movie" ? movie.title : movie.name;
  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";
  const posterMobile = movie.poster_path
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : "";

    const handlePlay = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${apiKey}&language=pt-BR`
    );
    if (!response.ok) throw new Error("Vídeo não encontrado");
    const data = await response.json();

   
    const trailer = data.results.find(
      (v) => v.type === "Trailer" && v.site === "YouTube"
    );

    if (trailer) {
      const trailerUrl = `https://www.youtube.com/watch?v=${trailer.key}`;
      window.open(trailerUrl, "_blank"); 
    } else {
      alert("Trailer não disponível.");
    }
  } catch (error) {
    console.error(error);
    alert("Erro ao buscar trailer.");
  }
};

  return (
    <StylesDetails bg={backdrop} bg2={posterMobile}>
      <div className="img" onClick={back}>
        <img src={netflix} alt="Logo da Netflix" />
      </div>

      <div className="info">
        <h1>
          {title.length > 23
            ? title.toUpperCase().slice(0, 19) + "..."
            : title.toUpperCase()}
        </h1>
        <div className="info-extras">
          <p>
            {type === "movie"
              ? movie.release_date?.slice(0, 4)
              : movie.first_air_date?.slice(0, 4)}
          </p>
          <p>{rating}</p>
          {type === "movie" ? (
            <p>
              {movie.runtime
                ? `${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}min`
                : "N/A"}
            </p>
          ) : (
            <p>Temporadas: {movie.number_of_seasons || "N/A"}</p>
          )}
        </div>
      </div>

      <div className="description">
        <p>{movie.overview?.slice(0, 120) || "Sem descrição"}...</p>
      </div>

      <div className="btns">
        <button className="play" onClick={handlePlay}>▶ Assistir</button>
        <button className="more-info">&#8505; Mais Informações</button>
      </div>

      <div className="casting">
        <h3>Elenco:</h3>
        <p>
          {cast?.slice(0, 3).map((actor, index) => (
            <span key={actor.cast_id || actor.id}>
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
            ?.map((g) => g.name)
            .join(", ")
            .slice(0, 30)}
          {movie.genres?.map((g) => g.name).join(", ").length > 30 ? "..." : ""}
        </p>
      </div>
    </StylesDetails>
  );
}

export default Details;

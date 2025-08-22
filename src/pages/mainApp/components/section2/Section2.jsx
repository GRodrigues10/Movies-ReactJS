import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { StylesSection2 } from "./Styles";

function Section2() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const apiKey = "ee96350ded551df8af41839e03615c58";
  const fetchPopularCards = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=1`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchPopularCards();
  }, []);

  const handleClick = (movieId) => {
    navigate(`/details/${movieId}`);
  };

  return (
    <StylesSection2>
      <div className="content-section">
        <p>
          <strong>Populares na Netflix</strong>
        </p>
        <div className="cards">
          {movies.map((e) => (
            <div
              key={e.id}
              className="card"
              onClick={() => handleClick(e.id)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.title}
              />
            </div>
          ))}
        </div>
      </div>
    </StylesSection2>
  );
}

export default Section2;

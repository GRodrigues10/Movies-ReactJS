import React, { useEffect, useState } from "react";
import { StylesSection9 } from "./Styles";

function Section9() {
  const [movies, setMovies] = useState([]);

  const apiKey = "ee96350ded551df8af41839e03615c58";
  const fetchPopularCards = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=Indiana%20Jones`
    );
    const data = await response.json();
    const array = data.results;
    array.map((e) => {
      console.log(e);
    });

    setMovies(data.results);
  };

  useEffect(() => {
    fetchPopularCards();
  }, []);

  return (
    <StylesSection9>
      <div className="content-section">
        <p>
          <strong>Universo Indiana Jones</strong>
        </p>
        <div className="cards">
          {movies
            .filter((e) => e.poster_path) // só pega os que têm imagem
            .map((e) => (
              <div key={e.id} className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                  alt={e.title || e.name}
                />
              </div>
            ))}
        </div>
      </div>
    </StylesSection9>
  );
}

export default Section9;

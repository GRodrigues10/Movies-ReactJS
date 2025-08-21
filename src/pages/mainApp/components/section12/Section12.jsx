import React, { useEffect, useState } from "react";
import { StylesSection12 } from "./Styles";

function Section12() {
  const [movies, setMovies] = useState([]);

  const apiKey = "ee96350ded551df8af41839e03615c58";
  const fetchPopularCards = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=The%20Lord%20Of%20Rings`
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
    <StylesSection12>
      <div className="content-section">
        <p>
          <strong>Universo Senhor dos Anéis</strong>
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
    </StylesSection12>
  );
}

export default Section12;

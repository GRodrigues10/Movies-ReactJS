import React, { useEffect, useState } from "react";
import { StylesSection13 } from "./Styles";

function Section13() {
  const [movies, setMovies] = useState([]);

  const apiKey = "ee96350ded551df8af41839e03615c58";
  const fetchPopularCards = async () => {
   const response = await fetch(
  `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=pt-BR&with_companies=420`
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
    <StylesSection13>
      <div className="content-section">
        <p>
          <strong>Universo Marvel</strong>
        </p>
        <div className="cards">
          {movies
            .filter((e) => e.poster_path) 
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
    </StylesSection13>
  );
}

export default Section13;

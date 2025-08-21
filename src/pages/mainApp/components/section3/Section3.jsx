import React, { useEffect, useState } from "react";
import { StylesSection3 } from "./Styles";

function Section3() {
  const [movies, setMovies] = useState([]);

  const apiKey = "ee96350ded551df8af41839e03615c58";
  const fetchPopularCards = async () => {
    const response = await fetch(
  `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_networks=213&language=pt-BR&page=1`
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
    <StylesSection3>
      <div className="content-section">
        <p>
          <strong>Originais Netflix</strong>
        </p>
        <div className="cards">
          {movies.map((e) => (
            <div key={e.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.title}
              />
            </div>
          ))}
        </div>
      </div>
    </StylesSection3>
  );
}

export default Section3;

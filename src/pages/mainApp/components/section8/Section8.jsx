import React, { useEffect, useState } from "react";
import { StylesSection8 } from "./Styles";

function Section8() {
  const [starWars, setStarWars] = useState([]);

  const apiKey = "ee96350ded551df8af41839e03615c58";

  const fetchStarWars = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=star%20wars&api_key=${apiKey}&language=pt-BR&page=1`
    );
    const data = await response.json();
    setStarWars(data.results);
  };

  useEffect(() => {
    fetchStarWars();
  }, []);

  return (
    <StylesSection8>
      <div className="content-section">
        <h2 className="main-title">Sagas Populares</h2>

        <div className="saga-block">
          <p className="saga-title"><strong>Universo Star Wars</strong></p>
          <div className="cards">
            {starWars.map((e) => (
              <div key={e.id} className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                  alt={e.title}
                />
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </StylesSection8>
  );
}

export default Section8;

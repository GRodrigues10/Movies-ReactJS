import React, { useEffect, useState } from "react";
import { StylesSection14 } from "./Styles";

function Section14() {
  const [movies, setMovies] = useState([]);
  const apiKey = "ee96350ded551df8af41839e03615c58";

  // IDs dos filmes DC mais populares
  const dcMovieIds = [
    268, 49026, 297802, 297761, 272,'tt5950044',141052,297762,474395,155,209112,464052,1042305
  ];

  const fetchDC = async () => {
    try {
      const promises = dcMovieIds.map((id) =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`).then(res =>
          res.json()
        )
      );
      const moviesData = await Promise.all(promises);
      setMovies(moviesData.filter((e) => e.poster_path)); // só filmes com poster
    } catch (error) {
      console.error("Erro ao buscar filmes DC:", error);
    }
  };

  useEffect(() => {
    fetchDC();
  }, []);

  return (
    <StylesSection14>
      <div className="content-section">
        <p>
          <strong>Universo DC</strong>
        </p>
        <div className="cards">
          {movies.map((e) => (
            <div key={e.id} className="card">
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.title || e.name}
              />
            </div>
          ))}
        </div>
      </div>
    </StylesSection14>
  );
}

export default Section14;

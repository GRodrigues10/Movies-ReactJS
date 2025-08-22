import React, { useEffect, useState, useRef } from "react";
import { StylesSection14 } from "./Styles";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section14() {
  const [movies, setMovies] = useState([]);
  const apiKey = "ee96350ded551df8af41839e03615c58";

  // IDs dos filmes DC mais populares
  const dcMovieIds = [
    268, 49026, 297802, 297761, 272, 141052,
    297762, 474395, 155, 209112, 464052, 1042305
  ];

  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const fetchDC = async () => {
    try {
      const promises = dcMovieIds.map((id) =>
        fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`
        ).then((res) => res.json())
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

  const handleClick = (id, type) => {
    navigate(`/details/${id}`, { state: { type } });
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -500, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <StylesSection14>
      <div className="content-section">
        <p>
          <strong>Universo DC</strong>
        </p>

        <div className="carousel-container">
          {/* seta esquerda */}
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={carouselRef}>
            {movies.map((e) => (
              <div
                key={e.id}
                className="card"
                onClick={() => handleClick(e.id, e.media_type)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                  alt={e.title || e.name}
                />
              </div>
            ))}
          </div>

          {/* seta direita */}
          <button className="arrow right" onClick={scrollRight}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </StylesSection14>
  );
}

export default Section14;

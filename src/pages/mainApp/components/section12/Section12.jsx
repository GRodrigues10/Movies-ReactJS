import React, { useEffect, useState, useRef } from "react";
import { StylesSection12 } from "./Styles";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section12() {
  const [movies, setMovies] = useState([]);
  const apiKey = "ee96350ded551df8af41839e03615c58";
  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const fetchPopularCards = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-BR&query=The%20Lord%20Of%20Rings`
    );
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchPopularCards();
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
    <StylesSection12>
      <div className="content-section">
        <p>
          <strong>Universo Senhor dos Anéis</strong>
        </p>

        <div className="carousel-container">
          {/* seta esquerda */}
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={carouselRef}>
            {movies
              .filter((e) => e.poster_path)
              .map((e) => (
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
    </StylesSection12>
  );
}

export default Section12;

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StylesSection2 } from "./Styles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section2() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const carouselRef = useRef(null);
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
    <StylesSection2>
      <div className="content-section">
        <p className="saga-title"><strong>Populares na Netflix</strong></p>

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
                  onClick={() => handleClick(e.id)}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                    alt={e.title}
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
    </StylesSection2>
  );
}

export default Section2;

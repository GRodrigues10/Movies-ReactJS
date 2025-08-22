import React, { useEffect, useState, useRef } from "react";
import { StylesSection8 } from "./Styles";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Section8() {
  const [starWars, setStarWars] = useState([]);
  const apiKey = "ee96350ded551df8af41839e03615c58";
  const navigate = useNavigate();
  const carouselRef = useRef(null);

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
    <StylesSection8>
      <div className="content-section">
        <h2 className="main-title">Sagas Populares</h2>
          <p className="saga-title"><strong>Universo Star Wars</strong></p>

        <div className="saga-block carousel-container">

          {/* seta esquerda */}
          <button className="arrow left" onClick={scrollLeft}>
            <FaChevronLeft />
          </button>

          <div className="cards" ref={carouselRef}>
            {starWars
              .filter((e) => e.poster_path)
              .map((e) => (
                <div
                  key={e.id}
                  className="card"
                  onClick={() => handleClick(e.id, e.media_type)}
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
    </StylesSection8>
  );
}

export default Section8;

import { useEffect, useState } from "react";
import { StylesSection1 } from "./Styles";
import { useNavigate } from "react-router-dom";

function Section1() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [season, setSeason] = useState();
  const [posterMobile, setPosterMobile] = useState("");
  const [posterMedium, setPosterMedium] = useState("");
  const [posterDesktop, setPosterDesktop] = useState("");
 const navigate = useNavigate();
const more = (id, type) => {
  navigate(`/details/${id}`, { state: { type } });
};
  useEffect(() => {
    const fetchBanner = async () => {
      const apiKey = "ee96350ded551df8af41839e03615c58";
      try {
        // dados da série
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/66732?api_key=${apiKey}&language=pt-BR`
        );
        const data = await response.json();
        setTitle(data.name);
        setSeason(data.number_of_seasons)
        setDescription(data.overview);


        // imagens extras
        const imgResponse = await fetch(
          `https://api.themoviedb.org/3/tv/66732/images?api_key=${apiKey}`
        );
        const imgData = await imgResponse.json();

        // pega um pôster diferente (ex: o segundo da lista)
        const anotherPoster = imgData.posters[30];
        const anotherBackdrop = imgData.backdrops[4];
        const anotherBackdrop2 = imgData.backdrops[30];


        setPosterMobile(
          `https://image.tmdb.org/t/p/w500${anotherPoster.file_path}`
        );
        // setPosterDesktop(
        //   `https://image.tmdb.org/t/p/original${anotherBackdrop.file_path}`
        // );

   setPosterDesktop("https://image.tmdb.org/t/p/original/hTWtybOC91veCgHAVt3ULZnj4up.jpg");


        setPosterMedium(`https://image.tmdb.org/t/p/original${anotherBackdrop2.file_path}`)
      } catch (error) {
        console.error("Erro ao buscar banner:", error);
      }
    };

    fetchBanner();
  }, []);

  return (
    <StylesSection1 bg={posterMobile} bg2={posterDesktop} bg3={posterMedium}>
      <div className="content-section">
        <div className="title">
          <h1>{title.toUpperCase()}</h1>
        </div>
        <div className="desc">
         <p className="season">Assista a temporada {season}</p>
          <p>{description.slice(0, 85)}...</p>
          <div className="btn">
            <a href="https://youtu.be/iKZyYdwS3Wg?si=_PmLTcQVMn-G5chD" target="_blank"><button className="play"> ▶ Assistir</button></a>
            <button onClick={()=>more(66732,'tv')} className="more">Mais Informações</button>
          </div>
        </div>
      </div>
    </StylesSection1>
  );
}

export default Section1;

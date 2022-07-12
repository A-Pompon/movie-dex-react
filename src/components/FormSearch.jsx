import React, { useEffect, useState } from "react";
import Card from "./Card";

import {getFilmsFromApiWithSearchedText,
  getImageFromApi,
  getFilmDetailFromApi} from "../api/tmdb-api"

import axios from "axios";
import env from "react-dotenv";

const FormSearch = () => {

  const [search, setSearch] = useState("star")
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${env.REACT_APP_TMDB_API_TOKEN}&language=fr&query=${search}`).then((res) => setMoviesData(res.data.results));
  }, [search]);

  return (
    <div className="formSearch-component">
      <div className="form-container">
        <form>
            <div className="typing-container">
              <p className="typing-demo">
                {/* METTRE D'AUTRES PHRASES ?? */}
                Vous pensez à un film ?
              </p>
            </div>
            <input type="text" placeholder="Entrez le titre d'un film" id="search-input" 
            onChange={(e) => setSearch(e.target.value)}
            />
            {/* METTRE LOGO DE RECHERCHE ?? */}
            <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="moreToLess">LOGO TOP</div>
          <div className="btn-sort" id="lessToMore">LOGO DOWN</div>
        </div>
      </div>

      <div className="result">
        {moviesData.map((movie) => <h2>{movie.title}</h2>)}
        <Card />
      </div>
    </div>
  );
};

export default FormSearch;

import env from "react-dotenv";

function getFilmsFromApiWithSearchedText(text, page) {
  const url =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    env.REACT_APP_TMDB_API_TOKEN +
    "&language=fr&query=" +
    text +
    "&page=" +
    page;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function getImageFromApi(name) {
  return "https://image.tmdb.org/t/p/w300" + name;
}

function getFilmDetailFromApi(id) {
  return fetch(
    "https://api.themoviedb.org/3/movie/" +
      id +
      "?api_key=" +
      env.REACT_APP_TMDB_API_TOKEN +
      "&language=fr"
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export {
  getFilmsFromApiWithSearchedText,
  getImageFromApi,
  getFilmDetailFromApi,
};

import React, { useState, useContext, useCallback, useEffect } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const API_KEY = 'api_key=6f65985ba5185e62a6b869c6001fc2f6';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const MOVIES_URL =
    BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;

  const SERIES_URL =
    BASE_URL + '/discover/tv?sort_by=popularity.desc&' + API_KEY;

  const SEARCH_MOVIES_URL = BASE_URL + '/search/movie?' + API_KEY + '&query=';
  const SEARCH_SERIES_URL = BASE_URL + '/search/tv?' + API_KEY + '&query=';
  const img_url = 'https://image.tmdb.org/t/p/w500';

  const data = [
    { name: 'movies', content: movies },
    { name: 'series', content: series },
  ];

  const fetchItems = (url, setItems) => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const { results } = data;
        console.log(data);

        if (results) {
          const newMovies = results.map((item) => {
            const { title, name, id, overview, vote_average, poster_path } =
              item;

            return {
              id,
              title,
              name,
              info: overview.slice(0, 150),
              image: img_url + poster_path,
              vote: vote_average,
            };
          });
          console.log(newMovies);
          setItems(newMovies);
        } else {
          setItems([]);
        }
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      fetchItems(SEARCH_MOVIES_URL + searchTerm, setMovies);
      fetchItems(SEARCH_SERIES_URL + searchTerm, setSeries);
    }
    fetchItems(MOVIES_URL, setMovies);
    fetchItems(SERIES_URL, setSeries);
  }, [searchTerm]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  const getMovie = (id) => {
    let tempMovies = [...movies];
    console.log(tempMovies);
    const movie = tempMovies.find((movie) => movie.id === id);
    return movie;
  };

  return (
    <AppContext.Provider
      value={{
        loading,
        movies,
        series,
        searchTerm,
        handleOnSubmit,
        setSearchTerm,
        getMovie,
        setMovies,
        searchedMovies,
        data,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };

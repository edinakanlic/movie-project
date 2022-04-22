import React from 'react';
import Movie from './Movie';
import Loading from './Loading';
import { useGlobalContext } from '../context';
import { FaChevronRight } from 'react-icons/fa';
import { click } from '@testing-library/user-event/dist/click';

const MovieList = ({ loading, movies, name, classAdd, getMovie }) => {
  let clickCounter = 0;

  console.log(movies);
  const handleButton = () => {
  
    const ratio = Math.floor(window.innerWidth / 224);
    clickCounter++;
    const movieList = document.querySelector(`.${classAdd}`);
    const itemNumber = movieList.querySelectorAll('img').length;

    if (itemNumber - (4 + 2 * clickCounter) + (4 - ratio) >= 0) {
      movieList.style.transform = `translateX(${
        movieList.computedStyleMap().get('transform')[0].x.value - 540
      }px)`;
    } else {
      movieList.style.transform = 'translateX(0)';
      clickCounter = 0;
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (movies.length < 1) {
    return (
      <h2 className='movie-list-title empty-search'>
        no movies matched your search
      </h2>
    );
  }

  return (
    <div className='movie-list-container'>
      <h2 className='movie-list-title'> {name}</h2>
      <div className='movie-list-wrapper'>
        <div className={'movie-list '+ classAdd }>
          {movies.map((item) => {
            return <Movie key={item.id} {...item} />;
          })}
        </div>
        <button type='button' className='arrow-icon' onClick={handleButton}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default MovieList;

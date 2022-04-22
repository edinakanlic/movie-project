import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ title,name, info, id, vote, image }) => {
  let title_original;
  if (title) {
    title_original = title;
  }
  else{
    title_original=name
  }
  return (
    <div className='movie-list-item'>
      <img src={image} className='movie-list-item-img' alt='' />
      <div className='movie-list-item-about'>
        <span className='movie-list-item-title'>{title_original}</span>
        <p className='movie-list-item-desc'>{info}</p>
        <div className='btn-container'>
          <a
            href='https://www.youtube.com/'
            type='button'
            className='btn-primary'
          >
            watch
          </a>
          <Link to={`/${id}`} className='btn-primary'>
            more info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;

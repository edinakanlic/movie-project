import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import SingleMovie from './SingleMovie';
import PageList from '../components/PageList';

const Movies = () => {
  const { movies, loading } = useGlobalContext();
  return (
    <>
      <h2 className='page-name'>Movies</h2>
      {/* <Hero>
        <Banner title='movie' info="movie's info">
          <button type='button' className='btn-primary'>
            watch
          </button>
        </Banner>
      </Hero> */}
      <PageList movies={movies} loading={loading} />
    </>
  );
};

export default Movies;

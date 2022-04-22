import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

import Hero from '../components/Hero';
import Banner from '../components/Banner';
import SingleMovie from './SingleMovie';
import PageList from '../components/PageList';

const Movies = () => {
  const { series, loading } = useGlobalContext();
  return (
    <>
      <h2 className='page-name'>TV Series</h2>
      {/* <Hero>
        <Banner title='movie' info="movie's info">
          <button type='button' className='btn-primary'>
            watchs
          </button>
        </Banner>
      </Hero> */}
      <PageList movies={series} loading={loading} />
    </>
  );
};

export default Movies;

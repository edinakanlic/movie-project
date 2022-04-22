import React from 'react';
import Banner from '../components/Banner';
import StyledHero from '../components/StyledHero';

import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleMovie = () => {
  const { getMovie } = useGlobalContext();

  const params = useParams();
  const id = params.id;

  const movie = getMovie(id);

  return (
    <>
      {/* <StyledHero img={image} >
      </StyledHero> */}
      <h2 className='single-page'>single page id: {id}</h2>
    </>
  );
};

export default SingleMovie;

import React from 'react';
import Hero from '../components/Hero';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import MovieList from '../components/MovieList';

import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context';

const Home = () => {
  const { data, loading } = useGlobalContext();

  const randomNumber = Math.floor(Math.random() * 10);
  //  const item = data[1].content[randomNumber];
  // console.log(item);

  return (
    <>
      <Hero>
        <Banner
          // title={item.title}
          //  info={item.info}
          title='title'
          info='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero exercitationem magni, doloremque, soluta laborum debitis dolores placeat ullam aperiam magnam maxime totam maiores iusto fugit? Nobis ipsum architecto voluptate praesentium iusto in, hic maiores tempore neque laudantium eius! Unde voluptates nemo totam corporis commodi consectetur itaque quaerat explicabo officia ipsum.'
          img='https://image.tmdb.org/t/p/w500/mcIYHZYwUbvhvUt8Lb5nENJ7AlX.jpg'
          id='7777'
        ></Banner>
      </Hero>
      {data.map((item) => {
        // console.log(item.content);
        return (
          <MovieList
            key={item.content.id}
            loading={loading}
            classAdd={item.name}
            name={item.name}
            movies={item.content}
          />
        );
      })}
    </>
  );
};

export default Home;

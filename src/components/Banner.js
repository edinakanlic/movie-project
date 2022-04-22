import React from 'react';
import { Link } from 'react-router-dom';

const Banner = ({ children, id, title, info, img }) => {
  return (
    <div
      className='featured-content'
      style={{
        background: `linear-gradient(to bottom,rgba(0,0,0,0), #131417), url(${img}) top/cover no-repeat fixed `,
      }}
    >
      <h1 className='featured-title'>{title}</h1>
      <p className='featured-desc'>{info}</p>

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
  );
};

export default Banner;

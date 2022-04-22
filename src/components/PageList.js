import React from 'react';
import Loading from './Loading';
import Movie from './Movie';


const PageList = ({movies, loading}) => {
if (loading) {
  return <Loading />;
}
  if (movies.length === 0) {
    return (
      <h2 className='movie-list-title empty-search'>
        no movie matched your search 
      </h2>
    );
  }
  return (
    <section className='pagelist'>
      <div className='pagelist-center'>
 {movies.map((item)=>{
  return <Movie key={item.id} {...item} />
 })}
       </div>
    </section>
  );
};

export default PageList;

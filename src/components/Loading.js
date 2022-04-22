import React from 'react';
import loadingGif from '../images/gif/loading.gif'

const Loading = () => {
  return (
    <div className='loading'>
      <h4>Movies data loading ...</h4>
      <img src={loadingGif} alt="" />
    </div>
  )
}

export default Loading

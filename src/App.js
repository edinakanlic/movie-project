import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Series from './pages/Series';
import SingleMovie from './pages/SingleMovie';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movies' element={<Movies />} />
        <Route exact path='/series' element={<Series />} />
        <Route exact path='/:id' element={<SingleMovie />} />
      </Routes>
    </>
  );
}

export default App;

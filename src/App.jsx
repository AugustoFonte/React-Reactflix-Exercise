import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages

import AboutPage from './pages/AboutPage';
import MoviesPage from './pages/MoviesPage';
import SingleMoviePage from './pages/SingleMoviePage';
import PoliticaPrivacidade from './pages/PoliticaPrivacidade';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movie/:movieSlug" element={<SingleMoviePage />} />
        <Route path="/PoliticaPrivacidade" element={<PoliticaPrivacidade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

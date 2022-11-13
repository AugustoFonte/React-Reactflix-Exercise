import React, { useState } from 'react';
import MovieCard from '../components/MovieCard';
import movies from '../data/movies.json';

// Layout
import MainLayout from '../layouts/MainLayout';

function MoviesPage() {
  const [text, setText] = useState('');

  const movieToRender = movies.filter((movie) => movie.title.toLowerCase().includes(text.toLowerCase()));

  return (
    <MainLayout>
      <h1>Movies Page</h1>
      <input
        className="MoviePage_Input"
        placeholder="Search a Movie"
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <ul className="MoviesPageGrid">
        {movieToRender.map((movie) => (
          <li key={movie.title}>
            <MovieCard title={movie.title} url={movie.imageUrl} slug={movie.slug} />
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

export default MoviesPage;

import React from 'react';
import { useParams } from 'react-router-dom';

import moviesData from '../data/movies.json';

// Layout
import MainLayout from '../layouts/MainLayout';

function SingleMoviePage() {
  const params = useParams();
  const movieSlug = params.movieSlug;
  const result = moviesData.find(({ slug }) => slug === movieSlug);

  const hasVideoId = result.youTubeTrailerId !== null;

  return (
    <MainLayout>
      <h1>
        Movie:{result.title} ({result.year})
      </h1>
      <img src={result.imageUrl} alt={result.title} />
      {hasVideoId && (
        <div>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${result.youTubeTrailerId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <a href={`https://www.youtube.com/watch/${result.youTubeTrailerId}`} target="_Blank">
            Watch on youtube
          </a>
        </div>
      )}
      {!hasVideoId && <p>There is no trailer</p>}
    </MainLayout>
  );
}

export default SingleMoviePage;

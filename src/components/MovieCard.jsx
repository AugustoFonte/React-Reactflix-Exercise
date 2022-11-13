import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function MovieCard(props) {
  return (
    <Link to={`/movie/${props.slug}`} className="MovieCardList">
      <div className="MovieCard">
        <img src={props.url} alt={`image of ${props.title}`} />
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
}
MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
};
export default MovieCard;

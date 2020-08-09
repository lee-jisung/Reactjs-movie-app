import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie(props) {
  return (
    // Link를 이용해서 Movie 카드 전체를 클릭해서 movie-detail page로 보내고
    // 동시에 state object로 정의한 data를 날려줄 수 있음
    // 그러면 App.js에서 Detail component로 이동될 때
    // 여기서 날려준 props들을 함께 보내준다.
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${props.id}`,
          state: {
            year: props.year,
            title: props.title,
            summary: props.summary,
            poster: props.poster,
            genres: props.genres,
          },
        }}
      >
        <img src={props.poster} alt={props.title} title={props.title} />
        <div className="movie__data">
          <h3 className="movie__title">{props.title}</h3>
          <h5 className="movie__year">{props.year}</h5>
          <ul className="movie__genres">
            {props.genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{props.summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;

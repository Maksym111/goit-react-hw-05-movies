import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//https://api.themoviedb.org/3/movie/{movie_id}?api_key=7b264c573728240a6ab06336c75c925f&language=en-US

const MoviesItem = ({ data: { id, title } }) => {
  return (
    <li>
      <Link to={`movie/${id}`}>{title}</Link>
    </li>
  );
};

MoviesItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MoviesItem;
